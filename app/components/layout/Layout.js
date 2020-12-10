import React from 'react';
import { View } from 'react-native';
import styles from './styles/Styles';

const Layout = ({ children }) => <View style={styles.container}>{children}</View>;

export default Layout;
