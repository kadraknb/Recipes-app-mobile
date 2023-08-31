export default class Formatter {
  static recipeDetail = (r, boo) => {
    return {
      id: boo ? r.idDrink : r.idMeal,
      name: boo ? r.strDrink : r.strMeal,
      thumb: boo ? r.strDrinkThumb : r.strMealThumb,
      category: boo ? r.strAlcoholic : r.strCategory,
      instructions: r.strInstructions,
      ingredient: this.__transformArray(r, 'strIngredient'),
      measure: this.__transformArray(r, 'strMeasure'),
    };
  };

  static recipeCard = (r, boo) => {
    return {
      id: boo ? r.idDrink : r.idMeal,
      name: boo ? r.strDrink : r.strMeal,
      thumb: boo ? r.strDrinkThumb : r.strMealThumb,
    };
  };

  static recipeRecommend = (r, boo) => (
    r.map((obj) => ({
      id: boo ? obj.idDrink : obj.idMeal,
      name: boo ? obj.strDrink : obj.strMeal,
      thumb: boo ? obj.strDrinkThumb : obj.strMealThumb,
    }))
  );

  static __transformArray = (r, str) => {
    return Object.entries(r)
      .filter(([k, v]) => k.includes(str) && v === null)
      .map(([_, v]) => v);
  };
}
