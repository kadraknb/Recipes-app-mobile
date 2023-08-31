import Formatter from '../utils/Formatter';


export default class GetApi {

  // get por receitas
  static recipes = async (boo) => {
    try {
      const data = await this._fetchProcessed(
        this._makeEndPoint(boo, 'search', 's', '')
      );
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // get receitas por id
  static recipesById = async (boo, id) => {
    try {
      const [data] = await this._fetchProcessed(
        this._makeEndPoint(boo, 'lookup', 'i', id)
        );
      return Formatter.recipeDetail(data, boo);
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // get receitas por busca
  static recipesBySearch = async (boo, searchFor, search) => {
    try {
      const TYPE = searchFor === 'i' ? 'filter' : 'search';
      const data = await this._fetchProcessed(
        this._makeEndPoint(boo, TYPE, searchFor, search)
      );
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };
  // pega receitas por categoria
  static recipesByCategory = async (boo, category) => {
    try {
      const data = await this._fetchProcessed(
        this._makeEndPoint(boo, 'filter', 'c', category)
      );
      return data;
    } catch (error) {
      console.error(error);
      return Error();
    }
  };

  // pega as categorias
  static categories = async (boo) => {
    try {
      const data = await this._fetchProcessed(
        this._makeEndPoint(boo, 'list', 'c', 'list')
      );
      return [{ strCategory: 'all' }, ...data];
    } catch (error) {
      console.error(error);
    }
  };

  // pega as recomendações
  static Recommendation = async (boo) => {
    try {
      const data = await this._fetchProcessed(
        this._makeEndPoint(!boo, 'search', 's', '')
      );
      return Formatter.recipeRecommend(data, !boo);
    } catch (error) {
      console.error(error);
    }
  };

  // cria end point
  static _makeEndPoint = (boo, type, searchFor, search) => {
    const host = boo ? 'thecocktaildb' : 'themealdb';
    return `https://www.${host}.com/api/json/v1/1/${type}.php?${searchFor}=${search}`;
  };

  // pega a api  e trata
  static _fetchProcessed = async (endPoint) => {
    const res = await fetch(endPoint);
    const data = await res.json();
    return Object.values(data)[0];
  };
}
