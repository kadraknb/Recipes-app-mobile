import React, { useContext, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import RadioButton from './RadioButton';
import { useRoute } from '@react-navigation/native';
import AppContext from '../context/AppContext';
import GetApi from '../services/getApi';

const SearchBar = () => {
  const { setRecipesUpdate } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [searchFor, setSelectedOption] = useState('s');

  const pageDrinks = useRoute().name === 'Drinks';
  const option = [
    { label: 'Name', value: 's' },
    { label: 'Ingredient', value: 'i' },
    { label: 'First letter', value: 'f' },
  ];

  const getSearchInApi = async () => {
    setRecipesUpdate(await GetApi.search(pageDrinks, searchFor, search));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <RadioButton option={option} setSelectedOption={setSelectedOption} />
      <Button
        title="Search"
        disabled={searchFor === 'f' && search.length > 1}
        onPress={getSearchInApi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
