import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';

const RecipesListScreen = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} haveSearch={true} />
      <Recipes />
      <Footer />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'rgb(236, 194, 142)',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     position: 'fixed',
//     // top: 50,
//     // bottom: 0,
//     // left: 0,
//     // right: 0,
//     height: 50,
//   },
// });

export default RecipesListScreen;
