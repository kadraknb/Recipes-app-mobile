export default class GetApi {
  END_POINT = String();
  LIMIT = Number();

  // get por busca
  static recipesBySearch = async (boo, searchFor, search) => {
    try {
      const TYPE = searchFor === 'i' ? 'filter' : 'search';
      this.LIMIT = 12;
      this._makeEndPoint(boo, TYPE, searchFor, search);
      const data = await this._fetchLimited();
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // pega receitas por categoria
  static recipesByCategory = async (boo, category) => {
    try {
      this.LIMIT = 12;
      this._makeEndPoint(boo, 'filter', 'c', category);
      const data = await this._fetchLimited();
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };

  // pega as categorias
  static categories = async (boo) => {
    try {
      this.LIMIT = 5;
      this._makeEndPoint(boo, 'list', 'c', 'list');
      const data = await this._fetchLimited();
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
  // limite de quantidade
  static _limiteArr = (obj) => Object.values(obj)[0].slice(0, this.LIMIT);
  // pega a api  e trata
  static _fetchProcessed = async () => {
    const res = await fetch(this.END_POINT);
    const data = await res.json();
    return data;
  };
  // pega a api com limite de quantidade
  static _fetchLimited = async () => {
    const data = await this._fetchProcessed();
    return this._limiteArr(data);
  };
}
