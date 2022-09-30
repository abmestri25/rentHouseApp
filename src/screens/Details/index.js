import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Header, ListItem} from '../../components';
import {
  colors,
  fonts,
  IC_Call,
  IC_Chat,
  IC_Star,
  IC_Star_Half,
  IL_House_01,
  IL_Pool,
  IL_User_01,
} from '../../res';

const Details = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView>
        <ImageBackground
          style={{
            height: 300,
            width: '100%',
            resizeMode: 'stretch',
            zIndex: -1,
          }}
          source={IL_House_01}>
          <Header type="details" navigation={navigation} />
        </ImageBackground>

        <View
          style={{
            width: '100%',
            backgroundColor: colors.white,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            top: -50,
            bottom: 0,
            zIndex: 99,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: fonts.SemiBold,
                }}>
                1 BHK Furnished
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: fonts.Regular,
                }}>
                Andheri East, Mumbai
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 20,
              }}>
              <IC_Star style={{padding: 10}} />
              <IC_Star style={{padding: 10}} />
              <IC_Star style={{padding: 10}} />
              <IC_Star style={{padding: 10}} />
              <IC_Star_Half style={{padding: 10}} />
            </View>
          </View>
          {/* listing agent */}
          <View
            style={{
              paddingVertical: 10,
            }}>
            <Text
              style={{
                paddingHorizontal: 20,
                fontFamily: fonts.SemiBold,
                fontSize: 16,
              }}>
              Listing Agent{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingLeft: 20,
                paddingTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    resizeMode: 'contain',
                    borderRadius: 50,
                    marginRight: 20,
                  }}
                  source={IL_User_01}
                />
                <View>
                  <Text style={{fontSize: 14, fontFamily: fonts.Bold}}>
                    Neha Mestri
                  </Text>
                  <Text style={{fontSize: 14, fontFamily: fonts.Regular}}>
                    Designation
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <IC_Call style={{marginRight: 20, padding: 25}} />
                <IC_Chat style={{padding: 25}} />
              </View>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                paddingHorizontal: 20,
                fontFamily: fonts.SemiBold,
                fontSize: 16,
              }}>
              House Facilities{' '}
            </Text>
            <View style={{paddingLeft: 20, paddingVertical: 10}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ListItem
                  type="facility"
                  name="Swimming Pool"
                  image={IL_Pool}
                  onPress={() => navigation.navigate('Details')}
                />
                <ListItem
                  type="facility"
                  name="Swimming Pool"
                  image={IL_Pool}
                  onPress={() => navigation.navigate('Details')}
                />
                <ListItem
                  type="facility"
                  name="Swimming Pool"
                  image={IL_Pool}
                  onPress={() => navigation.navigate('Details')}
                />
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              paddingVertical: 10,
            }}>
            <Text
              style={{
                paddingHorizontal: 20,
                fontFamily: fonts.SemiBold,
                fontSize: 16,
              }}>
              Description
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingLeft: 20,
                paddingTop: 10,
              }}>
              <View>
                <Text style={{fontSize: 14, fontFamily: fonts.Regular}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam provident qui ea tempora hic vel, tenetur eligendi
                  labore similique veniam.
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  color: colors.grey,
                  fontSize: 12,
                  fontFamily: fonts.Bold,
                }}>
                Price
              </Text>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 25,
                  fontFamily: fonts.Bold,
                }}>
                $ 7,500
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 20,
                    fontFamily: fonts.Bold,
                  }}>
                  Book Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
