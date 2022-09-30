import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  colors,
  fonts,
  IC_ArrowRightBlack,
  IC_Star,
  IC_Star_Half,
} from '../../../res';

const ListItem = ({type, onPress, image, name, city}) => {
  if (type === 'main') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 209,
          width: 231,
          backgroundColor: colors.white,
          borderRadius: 20,
          marginRight: 20,
        }}>
        <Image
          source={image}
          style={{
            height: 150,
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{fontFamily: fonts.SemiBold, fontSize: 14}}>
              {name}
            </Text>
            <Text style={{fontFamily: fonts.Regular, fontSize: 10}}>
              {city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <IC_Star style={{padding: 7}} />
            <IC_Star style={{padding: 7}} />
            <IC_Star style={{padding: 7}} />
            <IC_Star style={{padding: 7}} />
            <IC_Star_Half style={{padding: 7}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'facility') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 150,
          backgroundColor: colors.white,
          borderRadius: 20,
          marginRight: 20,
        }}>
        <Image
          source={image}
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            resizeMode: 'cover',
            height: 100,
            width: '100%',
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: fonts.SemiBold,
              fontSize: 14,
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 100,
          marginTop: 10,
          width: '100%',
          backgroundColor: colors.white,
          borderRadius: 20,
          marginRight: 20,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 20,
          }}>
          {/* image text */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {/* image */}
            <View style={{padding: 10}}>
              <Image
                source={image}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 10,
                  resizeMode: 'stretch',
                }}
              />
            </View>
            {/* text */}
            <View style={{paddingVertical: 10}}>
              <Text style={{fontFamily: fonts.SemiBold, fontSize: 16}}>
                {name}
              </Text>
              <Text style={{fontFamily: fonts.Regular, fontSize: 14}}>
                {city}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <IC_Star />
                <IC_Star />
                <IC_Star />
                <IC_Star />
                <IC_Star_Half />
              </View>
            </View>
          </View>
          {/* arrow right */}
          <View>
            <TouchableOpacity>
              <IC_ArrowRightBlack />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default ListItem;

const styles = StyleSheet.create({});
