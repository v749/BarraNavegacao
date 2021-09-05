import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PottaOne_400Regular } from '@expo-google-fonts/potta-one';

export default function Forro() {
  let [fontsLoaded] = useFonts({
    PottaOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Playlist Forros</Text>

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
    backgroundColor: '#DC143C',
    padding: 8,
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 80,
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#CD5C5C',
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
    color: 'black',
    fontFamily: 'PottaOne_400Regular',
  },
});
//Array Dadosfilmes
const DadosMusicas = [
  {
    uid: 1,
    musica: 'Inquilina',
    cantor_banda: 'Xand Avião',
    genero: 'Forró',
    ano: '2017',
    img:
      'https://portalsertanejo.net/wp-content/uploads/2017/10/ViewImage-1.jpg',
  },
  {
    uid: 2,
    musica: 'Faz o X',
    cantor_banda: 'Xand Avião',
    genero: 'Forró',
    ano: '2017',
    img:
      'http://s2.glbimg.com/XbiPWV4kJBwyiKSgttl0wOcocLQ=/e.glbimg.com/og/ed/f/original/2017/09/08/21460095_10155523886255874_1936737589_o.jpg',
  },
  {
    uid: 3,
    musica: 'Quem Chorava Hoje Ri',
    cantor_banda: 'Wesley Safadão - Gabriel Diniz',
    genero: 'Forró',
    ano: '2016',
    img:
      'https://direct.rhapsody.com/imageserver/images/alb.238042147/600x600.jpg',
  },
  {
    uid: 4,
    musica: 'Ressaca da Saudade',
    cantor_banda: 'Wesley Safadão',
    genero: 'Forró',
    ano: '2017',
    img:
      'https://images.genius.com/95203448a2b190a42c86328400d50324.300x300x1.jpg',
  },
  {
    uid: 5,
    musica: 'Risca Faca',
    cantor_banda: 'Aviões do Forró',
    genero: 'Forró',
    ano: '2006',
    img:
      'https://studiosol-a.akamaihd.net/letras/500x500/albuns_high/21998_20160928080054.jpg',
  },
  {
    uid: 6,
    musica: 'Uma Chance Por Favor',
    cantor_banda: 'Forro do HF',
    genero: 'Forró',
    ano: '2020',
    img: 'https://i.scdn.co/image/ab67616d0000b2736059ce61f9acef8a1a6c8e4c',
  },
  {
    uid: 7,
    musica: 'Esquema Preferido',
    cantor_banda: 'Os Barões da Pisadinha',
    genero: 'Forró',
    ano: '2021',
    img:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/2/0/0/d/889841589916350.jpg',
  },
  {
    uid: 8,
    musica: 'Segunda Opção',
    cantor_banda: 'Wesley Safadão',
    genero: 'Forró',
    ano: '2014',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/0/02/Wesley_Safad%C3%A3o_Ao_Vivo_em_Bras%C3%ADlia.jpg',
  },
  {
    uid: 9,
    musica: 'Coração Machucado',
    cantor_banda: 'Wesley Safadão',
    genero: 'Forró',
    ano: '2015',
    img:
      'https://images.suamusica.com.br/qTQIapvoffdedNEAwRd6nAOqJ-4=/300x300/1729294/909943/cd_cover.jpg',
  },
  {
    uid: 10,
    musica: 'Esquema Preferido',
    cantor_banda: 'Os Barões da Pisadinha',
    genero: 'Forró',
    ano: '2021',
    img:
      'https://images.genius.com/c7776115fd9512f64fd5ebf63af976f8.1000x1000x1.jpg',
  },
];
