import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, IC_ArrowLeftBlack, IC_Drawer} from '../../../res';

const Header = ({type, navigation}) => {
  if (type === 'home') {
    return (
      <TouchableOpacity
        onPress={() => console.log('CLICKED')}
        style={{padding: 20}}>
        <IC_Drawer />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 20,
        }}>
        <View
          style={{
            height: 39,
            width: 39,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 28,
          }}>
          <IC_ArrowLeftBlack />
        </View>
      </TouchableOpacity>
    );
  }
};

export default Header;

const styles = StyleSheet.create({});
