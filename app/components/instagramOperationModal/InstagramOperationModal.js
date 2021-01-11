import React from 'react';
import { View, TouchableWithoutFeedback, Modal, TouchableOpacity, Text } from 'react-native';

import styles from './styles/Styles';
import { CommentIcon, HeartIcon, CameraIcon } from '../icons';

const InstagramOperationModal = ({ modalVisible, close, modalName, count }) => {
  const _renderIcon = () => {
    if (modalName === 'posts')
      return <CameraIcon width={styles.icons.width} height={styles.icons.height} color={styles.icons.color} />;
    if (modalName === 'likes')
      return <HeartIcon width={styles.icons.width} height={styles.icons.height} color={styles.icons.color} />;
    if (modalName === 'comments')
      return <CommentIcon width={styles.icons.width} height={styles.icons.height} color={styles.icons.color} />;
  };

  const _renderTitle = () => {
    if (modalName === 'posts') return 'Gönderi Durumu';
    if (modalName === 'likes') return 'Beğeni Durumu';
    if (modalName === 'comments') return 'Yorum Durumu';
  };

  const _renderContent = () => {
    if (modalName === 'posts')
      return `Toplam gönderi sayısınız ${count}. Unutmayınız ki takipçileriniz sizi paylatığın gönderilerden ve hikayelerden hatırlayacaktır. Dolayısıyla paylaşım yapmaya lütfen özen gösterin.`;
    if (modalName === 'likes')
      return `Toplam beğeni sayısınız ${count}. Belirtilen beğeni sayısınız son 30 gönderinizi kapsamaktadır. Bunun sebebi önceki paylaşımlardan ziyade yeni paylaşımlarınızın önemini vurgulamak istiyoruz. Beğeni sayınızın her geçen gün artması dileğiyle!`;
    if (modalName === 'comments')
      return `Toplam yorum sayısınız ${count}. Belirtilen beğeni sayısınız son 30 gönderinizi kapsamaktadır. Son gönderilerinizdeki yorum sayısı etkileşimi daha fazla artıracaktır. Yakın çevrenizden daha fazla etkileşim için destek alabilirsiniz.`;
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableOpacity style={styles.centeredView} activeOpacity={1} onPressOut={close}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <View style={styles.headerIcon}>{_renderIcon()}</View>
              <Text style={styles.title}>{_renderTitle()}</Text>
            </View>
            <View style={styles.line} />
            <View>
              <Text style={styles.content}>{_renderContent()}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default InstagramOperationModal;
