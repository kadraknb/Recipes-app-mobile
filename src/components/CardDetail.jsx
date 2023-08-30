import React from 'react';
import { Image, Text, View } from 'react-native';
import FavoriteButton from './Buttons/FavoriteButton';

const CardDetail = ({ recipe }) => {
  return (
    <View>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: recipe.thumb }}
      />
      <View>
        <Text>{recipe.name}</Text>
        <Text>{recipe.category}</Text>
      </View>
      <View>
        <FavoriteButton id={recipe.id} />
      </View>
    </View>
  );
};

export default CardDetail;
