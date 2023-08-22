import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';

const RecipesListScreen = ({ navigation }) => {
  

  return (
    <View  >
      <Header navigation={navigation} haveSearch={true} />
      <Recipes />
      <Footer />
    </View>
  );
};


export default RecipesListScreen;
