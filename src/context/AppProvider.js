import React, { useState } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [recipesUpdate, setRecipesUpdate] = useState([]);
  
  const [isDrinkPage, setDrinkPage] = useState(false);
  const setIsDrinkPage = (page) => {
    setDrinkPage(page === 'Drinks')
  }

  const value = { recipesUpdate, setRecipesUpdate, isDrinkPage, setIsDrinkPage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: node,
}.isRequired;

export default AppProvider;
