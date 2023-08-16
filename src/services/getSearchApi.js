const getSearchApi = async ({ searchFor, search, pageDrinks }) => {
  const TYPE = searchFor === 'i' ? 'filter' : 'search';
  const LIMIT = 12;
  const HOST = pageDrinks ? 'thecocktaildb' : 'themealdb';
  const PATH = `/api/json/v1/1/${TYPE}.php?${searchFor}=${search}`;
  const END_POINT = `https://www.${HOST}.com${PATH}`

  try {
    const response = await fetch(END_POINT);
    const recipes = await response.json();
    const resSlice = Object.values(recipes)[0].slice(0, LIMIT);
    return resSlice;
  } catch (error) {
    return 0;
  }
};

export default getSearchApi;
