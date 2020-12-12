import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
import login from '../screens/auth/login/Login';
import register from '../screens/auth/register/Register';

export default AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="register" component={register} options={{ headerShown: false }} />
    <AuthStack.Screen name="login" component={login} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);
