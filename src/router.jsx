import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './page/Login';
import RecipesList from './page/RecipesList';
import AppProvider from './context/AppProvider';
import RecipesDetail from './page/RecipesDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContext from './context/AppContext';
// import DetailsScreen from './page/outrapage';
// Profile
// Drinks
const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  const { setIsDrinkPage } = useContext(AppContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Foods"
        component={RecipesList}
        listeners={() => setIsDrinkPage('Foods')}
      />
      <Tab.Screen
        name="Drinks"
        component={RecipesList}
        listeners={() => setIsDrinkPage('Drinks')}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator /* initialRouteName="Home" */>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Foods" component={RecipesList} /> */}
          <Stack.Screen name="Home" component={HomeStackScreen} />

          {/* <Stack.Screen name="Drinks" component={RecipesList} /> */}
          {/* <Stack.Screen name="RecipesInProgress" component={RecipesList} /> */}
          <Stack.Screen name="RecipesDetail" component={RecipesDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Router;
