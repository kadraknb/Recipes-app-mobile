import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

const Card = ({ recipe, pageIsDrinks }) => {
  const { idMeal, idDrink, strMealThumb, strDrinkThumb, strMeal, strDrink } =
    recipe;
  const navigation = useNavigation();
  const goToDetailRecipe = () => {
    const pathname = pageIsDrinks ? '/Foods/' : '/Drinks/';
    navigation.navigate(`${pathname}${pageIsDrinks ? idDrink : idMeal}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToDetailRecipe}>
      <View>
        <Image
          style={{ width: 200, height: 200 }}
          source={pageIsDrinks ? strDrinkThumb : strMealThumb}
        />
        <Text>{pageIsDrinks ? strDrink : strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
