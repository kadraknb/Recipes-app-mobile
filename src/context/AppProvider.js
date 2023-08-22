import React, { useState } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [recipesUpdate, setRecipesUpdate] = useState([]);

  const value = { recipesUpdate, setRecipesUpdate };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: node,
}.isRequired;

export default AppProvider;
