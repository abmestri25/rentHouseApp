import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Header, ListItem} from '../../components';
import {colors, fonts, IC_Search, IL_House_01, IL_House_02} from '../../res';

const Home = ({navigation, onPress}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <Header type="home" onPress={onPress} />
        {/* WELCOME TEXT */}
        <View style={styles.wrapperWelcome}>
          <Text style={styles.welcomeText}>Find</Text>
          <Text style={styles.welcomeText}>Your Dream Home</Text>
        </View>
        {/* SEARCH FIELD */}
        <View style={styles.wrapperSearch}>
          <View style={styles.wrapperTxtInput}>
            <TextInput
              placeholder="Find your dream home"
              style={styles.txtInput}
            />
            <View style={styles.searchBtn}>
              <TouchableOpacity>
                <IC_Search />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Content */}
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            paddingLeft: 20,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ListItem
              type="main"
              name="1BHK Furnished"
              city="Mumbai"
              image={IL_House_01}
              onPress={() => navigation.navigate('Details')}
            />
            <ListItem
              type="main"
              name="1BHK Furnished"
              city="Pune"
              image={IL_House_02}
              onPress={() => navigation.navigate('Details')}
            />
            <ListItem
              type="main"
              name="1BHK Furnished"
              city="Mumbai"
              image={IL_House_01}
              onPress={() => navigation.navigate('Details')}
            />
            <ListItem
              type="main"
              name="1BHK Furnished"
              city="Pune"
              image={IL_House_02}
              onPress={() => navigation.navigate('Details')}
            />
          </ScrollView>
        </View>

        {/* Recommended */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: fonts.SemiBold,
            }}>
            Recommended For You
          </Text>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 20,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ListItem
                name="1BHK Furnished"
                city="Mumbai"
                image={IL_House_01}
                onPress={() => navigation.navigate('Details')}
              />
              <ListItem
                name="1BHK Furnished"
                city="Pune"
                image={IL_House_02}
                onPress={() => navigation.navigate('Details')}
              />
              <ListItem
                name="1BHK Furnished"
                city="Mumbai"
                image={IL_House_01}
                onPress={() => navigation.navigate('Details')}
              />
              <ListItem
                name="1BHK Furnished"
                city="Pune"
                image={IL_House_02}
                onPress={() => navigation.navigate('Details')}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroudColor: colors.white,
  },
  wrapperWelcome: {
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
  },

  wrapperSearch: {
    paddingHorizontal: 20,
    marginTop: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  wrapperTxtInput: {
    height: 55,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchBtn: {
    height: 39,
    width: 39,
    backgroundColor: colors.primary,
    borderRadius: 19.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    fontSize: 15,
    fontFamily: fonts.Regular,
  },
});
