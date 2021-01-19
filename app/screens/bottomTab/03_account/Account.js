import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles/Styles';
import Layout from '../../../components/layout/Layout';
import { EditIcon, CloseIcon, UserIcon, UploadIcon, DeleteIcon, KeyIcon } from '../../../components/icons';
import Button from '../../../components/button/Button';
import { Fonts, GlobalStyles } from '../../../theme';
import { request } from '../../../utils/Request';
import UserActions from '../../../redux/UserItemRedux';
import { emailIsValid, generalErrorMessage } from '../../../utils/Functions';
import Messages from '../../../utils/Messages';
import { Colors } from '../../../theme';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import PasswordChangeModal from '../../../components/passwordChangeModal/PasswordChangeModal';

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userItem);

  const [editable, seteditable] = useState(false);
  const [initialState, setinitialState] = useState({ firstname: '', surname: '', email: '', profilePhoto: null });
  const [nameSurname, setnameSurname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [fetchingScreen, setfetchingScreen] = useState(false);
  const [fetchingUpdate, setfetchingUpdate] = useState(false);
  const [fetchingLogout, setfetchingLogout] = useState(false);
  const [fetchingPasswordChange, setfetchingPasswordChange] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);

  const inputElementRef = useRef(null);

  useEffect(() => {
    if (user?.token) {
      getUserInfo();
    }

    inputElementRef.current.setNativeProps({
      style: { fontFamily: Fonts.type.PoppinsRegular },
    });
  }, []);

  const permissionRequest = async () => {
    try {
      const { status: mediaLibraryStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted' || mediaLibraryStatus !== 'granted') {
        return Alert.alert(
          Messages.pleaseAttention,
          Messages.galleryPermission,
          [
            {
              text: Messages.okay,
              onPress: () => {},
            },
            {
              text: Messages.tryAgain,
              onPress: () => {
                permissionRequest;
              },
            },
          ],
          {
            cancelable: false,
          },
        );
      }
      return pickImage();
    } catch (error) {
      generalErrorMessage();
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      });

      if (!result?.cancelled) {
        const file = result?.uri.split('ImagePicker')[1].slice(1);
        let type = file.substr(file.length - 4).includes('.')
          ? file.substr(file.length - 3)
          : file.substr(file.length - 4);

        if (type && (type === 'jpg' || type === 'jpeg' || type === 'png')) {
          let imageUri = result?.base64 ? `data:image/${type};base64,${result?.base64}` : null;
          if (imageUri.length > 600000) {
            return Alert.alert(
              Messages.generalErrorTitle,
              Messages.photoSizeError,
              [{ text: Messages.okay, onPress: () => {} }],
              {
                cancelable: false,
              },
            );
          }
          return setProfilePhoto(imageUri);
        }
        return generalErrorMessage();
      }
    } catch (error) {
      generalErrorMessage();
    }
  };

  const updateValidation = () => {
    let errorMessage;
    if (
      initialState?.firstname + ' ' + initialState?.surname === nameSurname &&
      initialState?.email === email &&
      initialState?.profilePhoto === profilePhoto
    ) {
      errorMessage = Messages.noChanges;
    } else if (!nameSurname || nameSurname.length < 4 || !nameSurname.includes(' ')) {
      errorMessage = Messages.invalidNameSurname;
    } else if (!email || !emailIsValid(email)) {
      errorMessage = Messages.invalidEmail;
    } else if (!password || password.length < 4) {
      errorMessage = Messages.invalidPassword;
    }
    errorMessage
      ? Alert.alert(Messages.pleaseAttention, errorMessage, [{ text: Messages.okay, onPress: () => {} }], {
          cancelable: false,
        })
      : updateInfo();
  };

  const deletePhoto = () => {
    setProfilePhoto('');
  };

  const updateInfo = async () => {
    try {
      setfetchingUpdate(true);
      let nameSurnameArray = nameSurname?.split(' ');
      const response = await request.post('/api/personal-info/edit', {
        firstname: nameSurnameArray[0],
        surname: nameSurnameArray[1],
        email: email,
        password: password,
        profilePhoto: profilePhoto,
      });

      if (response.status === 200 && response?.data) {
        setfetchingUpdate(false);
        setpassword('');
        if (response?.data?.success) {
          let reduxUpdate = false;
          if (initialState?.firstname + ' ' + initialState?.surname !== nameSurname) {
            reduxUpdate = true;
          }
          await getUserInfo(reduxUpdate);
          seteditable(false);
          return Alert.alert(
            Messages.success,
            Messages.successfullyChanged,
            [{ text: Messages.okay, onPress: () => {} }],
            {
              cancelable: false,
            },
          );
        } else if (response?.data?.message?.length) {
          return Alert.alert(
            Messages.generalErrorTitle,
            response?.data?.message,
            [
              {
                text: Messages.okay,
                onPress: () => {},
              },
            ],
            {
              cancelable: false,
            },
          );
        }
        return generalErrorMessage();
      }
      setpassword('');
      setfetchingUpdate(false);
      return generalErrorMessage();
    } catch (error) {
      setpassword('');
      setfetchingUpdate(false);
      return generalErrorMessage();
    }
  };

  const getUserInfo = async (userUpdate = false) => {
    try {
      setfetchingScreen(true);
      const response = await request.get('/api/personal-info/');
      if (response.status === 200 && response?.data) {
        if (response?.data?.success) {
          let userInfo = response?.data?.userInfo;
          setinitialState(userInfo);
          setnameSurname(userInfo?.firstname + ' ' + userInfo?.surname);
          setemail(userInfo?.email);
          setProfilePhoto(userInfo?.profilePhoto);
          if (userUpdate) {
            dispatch(UserActions.setUser({ firstname: userInfo?.firstname, surname: userInfo?.surname }));
          }

          return setfetchingScreen(false);
        }
        setfetchingScreen(false);
        return generalErrorMessage();
      }
      setfetchingScreen(false);
      generalErrorMessage();
      return setfetchingScreen(false);
    } catch (error) {
      generalErrorMessage();
      return setfetchingScreen(false);
    }
  };

  const logout = () => {
    try {
      setfetchingLogout(true);
      dispatch(UserActions.resetUser());
      dispatch(UserActions.resetToken());
      setfetchingLogout(false);
    } catch (error) {
      setfetchingLogout(false);
      generalErrorMessage();
    }
  };

  const _renderProfilePhoto = () => {
    if (editable) {
      if (profilePhoto?.length) {
        return (
          <TouchableOpacity disabled={!editable || fetchingUpdate} onPress={permissionRequest}>
            <Image source={{ uri: profilePhoto }} style={styles.image} />
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity disabled={!editable || fetchingUpdate} style={styles.photo} onPress={permissionRequest}>
            <UploadIcon color={'white'} width={35} height={35} />
          </TouchableOpacity>
        );
      }
    } else if (initialState?.profilePhoto?.length) {
      return <Image source={{ uri: initialState?.profilePhoto }} style={styles.image} />;
    } else {
      return (
        <View style={styles.photo}>
          <UserIcon color={'white'} width={35} height={35} />
        </View>
      );
    }
  };

  const _renderOperationPhoto = () => {
    if (editable && profilePhoto?.length) {
      return (
        <View style={styles.photoOperation}>
          <TouchableOpacity onPress={deletePhoto} disabled={fetchingUpdate}>
            <DeleteIcon color={Colors.brightRed} />
          </TouchableOpacity>
        </View>
      );
    }
  };

  const editableClose = () => {
    if (
      initialState?.firstname + ' ' + initialState?.surname === nameSurname &&
      initialState?.email === email &&
      initialState?.profilePhoto === profilePhoto
    ) {
      setpassword('');
      return seteditable(false);
    }
    return Alert.alert(
      Messages.pleaseAttention,
      Messages.changesWillBeLost,
      [
        {
          text: Messages.renounce,
          onPress: () => {},
          style: 'cancel',
        },
        { text: Messages.okay, onPress: () => resetEditData() },
      ],
      { cancelable: false },
    );
  };

  const passwordChangeRequest = async (oldPassword, newPassword) => {
    try {
      setfetchingPasswordChange(true);
      const response = await request.post('/api/personal-info/change-password', {
        password: oldPassword,
        newPassword: newPassword,
      });
      if (response?.status === 200 && response?.data) {
        setfetchingPasswordChange(false);
        if (response?.data?.success) {
          closePasswordChangeModal();
          return Alert.alert(
            Messages.success,
            Messages.successfullyChanged,
            [{ text: Messages.okay, onPress: () => {} }],
            {
              cancelable: false,
            },
          );
        } else if (response?.data?.message?.length) {
          return Alert.alert(
            Messages.generalErrorTitle,
            response?.data?.message,
            [
              {
                text: Messages.okay,
                onPress: () => {},
              },
            ],
            {
              cancelable: false,
            },
          );
        }
        return generalErrorMessage();
      }
    } catch (error) {
      setfetchingPasswordChange(false);
      generalErrorMessage();
    }
  };

  const resetEditData = () => {
    setpassword('');
    setnameSurname(initialState?.firstname + ' ' + initialState?.surname);
    setemail(initialState?.email);
    setProfilePhoto(initialState?.profilePhoto);
    seteditable(false);
  };

  const closePasswordChangeModal = () => {
    setShowPasswordChangeModal(false);
  };

  const passwordChangeModal = () => {
    if (showPasswordChangeModal) {
      return (
        <PasswordChangeModal
          close={closePasswordChangeModal}
          loading={fetchingPasswordChange}
          passwordChange={(oldPassword, newPassword) => passwordChangeRequest(oldPassword, newPassword)}
        />
      );
    }
  };

  if (fetchingScreen) {
    return (
      <Layout>
        <View style={GlobalStyles.fCenter}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      {passwordChangeModal()}
      <View style={styles.header}>
        <View style={styles.icons}>
          {editable ? (
            <View>
              <TouchableOpacity onPress={editableClose} disabled={fetchingUpdate}>
                <CloseIcon width={24} height={24} color={'white'} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShowPasswordChangeModal(true)}
                disabled={fetchingUpdate}
                style={styles.passwordChangeKey}>
                <KeyIcon width={24} height={24} color={'white'} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => seteditable(true)} disabled={fetchingUpdate}>
              <EditIcon width={24} height={24} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.profile}>{_renderProfilePhoto()}</View>
        <View style={styles.titleView}>
          {_renderOperationPhoto()}
          {!editable && (
            <Text style={styles.title}>Hoşgeldin {initialState?.firstname + ' ' + initialState?.surname}</Text>
          )}
        </View>
      </View>
      <View style={styles.form}>
        <KeyboardAwareScrollView enableOnAndroid={true} bounces={false}>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Adınızı ve Soyadınızı Giriniz'}
              style={styles.textInputStyle}
              value={nameSurname}
              onChangeText={setnameSurname}
              keyboardType={'visible-password'}
              editable={editable}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              placeholder={'Email Adresinizi Giriniz'}
              style={styles.textInputStyle}
              value={email}
              onChangeText={setemail}
              keyboardType={'visible-password'}
              editable={editable}
            />
          </View>
          <View style={styles.inputStyles}>
            <TextInput
              ref={inputElementRef}
              placeholder={'Şifrenizi Giriniz'}
              style={styles.textInputStyle}
              value={password}
              onChangeText={setpassword}
              autoCompleteType={'password'}
              secureTextEntry={true}
              editable={editable}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.footer}>
        {editable ? (
          <Button
            title={'Kaydet'}
            colorName={'save'}
            fetching={fetchingUpdate}
            disabled={fetchingUpdate}
            onPressBtn={updateValidation}
          />
        ) : (
          <Button
            title={'Çıkış Yap'}
            colorName={'logout'}
            fetching={fetchingLogout}
            disabled={fetchingLogout}
            onPressBtn={logout}
          />
        )}
      </View>
    </Layout>
  );
};

export default Account;
