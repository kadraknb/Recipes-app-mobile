import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

function Footer() {
  const nav = useNavigation();

  return (
    <View style={styles.footer} data-testid="footer">
      <Ionicons
        name="fast-food"
        onPress={() => nav.navigate('Foods')}
        size={24}
        color="black"
      />
      <Entypo
        name="drink"
        onPress={() => nav.navigate('Drinks')}
        size={24}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgb(236, 194, 142)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
});

export default Footer;
