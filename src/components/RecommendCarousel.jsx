import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import GetApi from '../services/getApi';
import { useRoute } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

const RecommendCarousel = () => {
  const [recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(false);

  const pageIsDrinks = useRoute().name === 'Drinks';

  useEffect(() => {
    getRecommend();
  }, []);

  const getRecommend = async () => {
    const data = await GetApi.Recommendation(pageIsDrinks);
    setRecommend(data);
    setLoading(true);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.thumb }} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <Text>Recommended</Text>
      {loading && (
        <Carousel
          data={recommend}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 50}
        />
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 8,
  },
});

export default RecommendCarousel;
