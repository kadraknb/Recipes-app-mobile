import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GetApi from '../services/getApi';
import { useRoute } from '@react-navigation/native';
import AppContext from '../context/AppContext';
import CardDetail from '../components/CardDetail';
import RecommendCarousel from '../components/RecommendCarousel';
import GreeButton from '../components/Buttons/GreeButton';

const RecipesDetail = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const {isDrinkPage} = useContext(AppContext);

  const { recipeId } = useRoute().params;

  useEffect(() => {
    getRecipe();
    return () => {};
  }, []);

  const getRecipe = async () => {
    const data = await GetApi.recipesById(isDrinkPage, recipeId);
    setRecipe(data);
    setLoading(true);
  };
  
  return (
    <View>
      {loading && (
        <View>
          <CardDetail recipe={recipe} />
          <View>
          <Text>Ingredients</Text>
            {recipe.ingredient.map(( ingredient, i) => (
              <Text key={ingredient + new Date().getTime()}>
                {`${ingredient} ${recipe.measure[i]}`}
              </Text>
            ))}
          </View>
          <Text>Instructions</Text>
          <Text>{recipe.instructions}</Text>

          <RecommendCarousel />
          <GreeButton title="Start Recipe" newRota="RecipesProcess" recipeId={recipeId} />
        </View>
      )}
    </View>
  );
};

export default RecipesDetail;
