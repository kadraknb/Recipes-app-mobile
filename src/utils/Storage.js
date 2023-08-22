import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  // Armazenar um valor
  static saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  // Recuperar um valor
  static getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
    }
  };
}
