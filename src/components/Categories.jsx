import React, { useContext, useEffect, useState } from 'react';
import { View, Button} from 'react-native';
import GetApi from '../services/getApi';
import { useRoute } from '@react-navigation/native';
import AppContext from '../context/AppContext';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { setRecipes } = useContext(AppContext);
  const pageIsDrinks = useRoute().name === 'Drinks';

  useEffect(() => {
    getCategories();
    return () => {};
  }, []);

  const getCategories = async () => {
    const data = await GetApi.categories(pageIsDrinks);
    setCategories(data);
  };

  const setRecipesByCategory = async (category) => {
    const data = await GetApi.recipesByCategory(pageIsDrinks ,category)
    setRecipes(data)
  };

  return (
    <View>
      {categories[0] &&
        categories.map(({ strCategory }) => (
          <Button
            title={strCategory}
            key={strCategory}
            onPress={() => {setRecipesByCategory(strCategory)}}
          />
        ))}
    </View>
  );
};

export default Categories;
