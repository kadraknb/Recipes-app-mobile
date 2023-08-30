import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Storage from '../../utils/Storage';

const FavoriteButton = ({ id }) => {
  const [recipeStorage, setRecipeStorage] = useState({});

  useEffect(() => {
    getFavorite();
    return () => {};
  }, []);

  const getFavorite = async () => {
    const data = await Storage.getData('recipes');
    setRecipeStorage(data[id] || { favorite: false });
  };
  const saveNewStates = async () => {
    const newData = { ...recipeStorage, favorite: !recipeStorage.favorite };
    Storage.saveData('recipes', {
      ...(await Storage.getData('recipes')),
      [id]: newData,
    });
    setRecipeStorage(newData);
  };
  return (
    <View>
      <MaterialIcons
        name={`favorite${recipeStorage.favorite ? '' : '-border'}`}
        size={24}
        color="black"
        onPress={saveNewStates}
      />
    </View>
  );
};

export default FavoriteButton;
