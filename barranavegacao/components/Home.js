import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={estilo.image}></ImageBackground>
    </View>
  );
}
const image = {
  uri:
    'https://i.pinimg.com/originals/83/52/60/83526047fc9dd4bda1194b3220df9600.webp',
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
