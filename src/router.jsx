import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './page/Login';
import FoodsScreen from './page/FoodsScreen';
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
          <Stack.Screen name="Foods" component={FoodsScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Router;
