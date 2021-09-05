import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PottaOne_400Regular } from '@expo-google-fonts/potta-one';

export default function Rock() {
  let [fontsLoaded] = useFonts({
    PottaOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Playlist Rocks</Text>

        <FlatList
          data={DadosMusicas}
          keyExtractor={(item) => {
            item.uid.toString();
          }}
          renderItem={({ item }) => (
            <View style={estilo.blocos}>
              <View>
                <Image
                  resizeMode={'contain'}
                  style={estilo.img}
                  source={{ uri: item.img }}
                />
              </View>
              <View style={estilo.textoMusica}>
                <Text>{item.musica} </Text>
                <Text>{item.cantor_banda}</Text>
                <Text>{item.genero}</Text>
                <Text>{item.ano}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008B8B',
    padding: 8,
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 80,
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#48D1CC',
    width: 280,
    height: 80,
    marginVertical: 5,
    borderRadius: 5,
  },
  textoMusica: {
    marginLeft: 20,
    maginVertical: 10,
    textAlign: 'left',
  },
  titulo: {
    //marginVertical: 10,
    fontSize: 20,
    color: 'yellow',
    fontFamily: 'PottaOne_400Regular',
  },
});
//Array Dadosfilmes
const DadosMusicas = [
  {
    uid: 1,
    musica: 'Pais e Filhos',
    cantor_banda: 'Legião Urbana',
    genero: 'Rock/Pop',
    ano: '1989',
    img: 'https://i1.sndcdn.com/artworks-000201502025-cubz0c-t500x500.jpg',
  },
  {
    uid: 2,
    musica: 'Tempo Perdido',
    cantor_banda: 'Legião Urbana',
    genero: 'Rock/Pop',
    ano: '1986',
    img:
      'https://direct.rhapsody.com/imageserver/images/alb.315648585/600x600.jpg',
  },
  {
    uid: 3,
    musica: 'índios',
    cantor_banda: 'Legião Urbana',
    genero: 'Rock/Pop',
    ano: '1986',
    img: 'https://i1.sndcdn.com/artworks-000182897977-gr6cpn-t500x500.jpg',
  },
  {
    uid: 4,
    musica: 'In The End',
    cantor_banda: 'Linkin Park',
    genero: 'Hard Rock',
    ano: '2001',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/5/52/Linkin_in_the_end_single_cover.png',
  },
  {
    uid: 5,
    musica: 'November Rain',
    cantor_banda: 'Guns N Roses',
    genero: 'Hard Rock',
    ano: '1991',
    img:
      'https://studiosol-a.akamaihd.net/letras/500x500/fotos/a/9/b/d/a9bdd139aab38a24bc53de1c24b2a2ee.jpg',
  },
  {
    uid: 6,
    musica: 'Faint',
    cantor_banda: 'Linkin Park',
    genero: 'Hard Rock',
    ano: '2003',
    img:
      'https://i.pinimg.com/originals/b7/73/87/b773878642adc3475bd30bed3b3cc552.jpg',
  },
  {
    uid: 7,
    musica: 'Burn It Down',
    cantor_banda: 'Linkin Park',
    genero: 'Hard Rock',
    ano: '2012',
    img:
      'http://2.bp.blogspot.com/-ebBRZC2cZ7g/T41QweI_0kI/AAAAAAAAE5o/Jq0fqRrJmAM/s1600/linkinparklivingthings.jpg',
  },
  {
    uid: 8,
    musica: 'Numb',
    cantor_banda: 'Linkin Park',
    genero: 'Rock',
    ano: '2003',
    img: 'https://i1.sndcdn.com/artworks-Aa17ty5d1Nd3jGLS-27zUPg-t500x500.jpg',
  },
  {
    uid: 9,
    musica: 'Somewhere I Belong',
    cantor_banda: 'Linkin Park',
    genero: 'Hard Rock',
    ano: '2003',
    img: 'https://i1.sndcdn.com/artworks-000236163523-erh3ia-t500x500.jpg',
  },
  {
    uid: 10,
    musica: 'Bohemian Rhapsody',
    cantor_banda: 'Queen',
    genero: 'Rock',
    ano: '1975',
    img: 'https://www.vagalume.com.br/queen/images/queen.jpg',
  },
];
