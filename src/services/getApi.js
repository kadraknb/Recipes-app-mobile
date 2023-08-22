export default class GetApi {
  END_POINT = String();

  // get por receitas
  static recipes = async (boo) => {
    try {
      this._makeEndPoint(boo, 'search', 's', '');
      const data = await this._fetchProcessed();
      console.log("🚀 ~ recipes= ~ data:", data);
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // get receitas por busca
  static recipesBySearch = async (boo, searchFor, search) => {
    try {
      const TYPE = searchFor === 'i' ? 'filter' : 'search';
      this._makeEndPoint(boo, TYPE, searchFor, search);
      const data = await this._fetchProcessed();
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // pega receitas por categoria
  static recipesByCategory = async (boo, category) => {
    try {
      this._makeEndPoint(boo, 'filter', 'c', category);
      const data = await this._fetchProcessed();
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };

  // pega as categorias
  static categories = async (boo) => {
    try {
      this._makeEndPoint(boo, 'list', 'c', 'list');
      const data = await this._fetchProcessed();
      return [{ strCategory: 'all' }, ...data];
    } catch (error) {
      console.error(error);
    }
  };

  // cria end point
  static _makeEndPoint = (boo, type, searchFor, search) => {
    const host = boo ? 'thecocktaildb' : 'themealdb';
    this.END_POINT = `https://www.${host}.com/api/json/v1/1/${type}.php?${searchFor}=${search}`;
  };

  // pega a api  e trata
  static _fetchProcessed = async () => {
    const res = await fetch(this.END_POINT);
    const data = await res.json();
    return Object.values(data)[0];
  };
}
