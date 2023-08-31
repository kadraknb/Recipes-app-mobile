import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

const GreeButton = ({ title, newRota, recipeId = '' }) => {
  const navigation = useNavigation();
  
  const goToDetailRecipe = () => {
    navigation.navigate(newRota, { recipeId });
  };

  return (
    <View>
      <Button onPress={goToDetailRecipe} title={title} />
    </View>
  );
};

export default GreeButton;
