import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Storage from '../utils/Storage';

const Header = ({ navigation, haveSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [nameUser, setNameUser] = useState('');

  useEffect(() => {
    getNameUser();
    return () => {};
  }, []);

  const getNameUser = async () => {
    setNameUser((await Storage.getData('user')).name);
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerUser}>
          <FontAwesome5
            onPress={goToProfile}
            name="user"
            size={24}
            color="black"
          />
          <Text style={styles.headerText}>{nameUser}</Text>
        </View>
        {haveSearch && (
          <Ionicons
            onPress={() => {
              setSearchVisible(!searchVisible);
            }}
            name="md-search"
            size={24}
            color="black"
          />
        )}
      </View>
      {searchVisible && <SearchBar />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'bisque',
    padding: 10,
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default Header;
