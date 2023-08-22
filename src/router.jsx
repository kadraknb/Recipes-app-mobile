import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './page/Login';
import RecipesList from './page/RecipesList';
import AppProvider from './context/AppProvider';
// import DetailsScreen from './page/outrapage';
// Profile
// Drinks
const Stack = createStackNavigator();

const Router = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Foods" component={RecipesList} />
          <Stack.Screen name="Drinks" component={RecipesList} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Router;
