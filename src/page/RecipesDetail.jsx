import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import GetApi from '../services/getApi';
import Formatter from '../utils/Formatter';
import { useRoute } from '@react-navigation/native';
import RecommendCarousel from '../components/RecommendCarousel';

const RecipesDetail = ({ isDrinks }) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { recipeId } = route.params;

  useEffect(() => {
    getRecipe();
    return () => {};
  }, []);

  const getRecipe = async () => {
    const data = await GetApi.recipesById(isDrinks, recipeId);
    setRecipe(data);
    setLoading(true)
  };
  
  return (
    <View>
      {loading && (
        <View>
          <Image style={{ width: 200, height: 200 }} source={{ uri: recipe.thumb }} />
          <View>
            <Text>{recipe.name}</Text>
          </View>
          <Text>{recipe.category}</Text>
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
          <Text>Video</Text>
          {!isDrinks && <Text>{recipe.youtube}</Text>}
          <RecommendCarousel />
        </View>
      )}
    </View>
  );
};

export default RecipesDetail;
