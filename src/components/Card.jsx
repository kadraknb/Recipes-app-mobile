import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Formatter from '../utils/Formatter';

const Card = ({ recipe, pageIsDrinks }) => {
  const { id, name, thumb } = Formatter.recipeCard(recipe, pageIsDrinks);
  const navigation = useNavigation();
  const goToDetailRecipe = () => {
    navigation.navigate('RecipesDetail', { recipeId: id });
  };

  return (
      <TouchableWithoutFeedback onPress={goToDetailRecipe}>
        <View>
          <Image style={{ width: 100, height: 100 }} source={{ uri: thumb }} />
          <Text>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
  );
};

export default Card;
