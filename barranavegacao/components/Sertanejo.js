import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PottaOne_400Regular } from '@expo-google-fonts/potta-one';

export default function Sertanejo() {
  let [fontsLoaded] = useFonts({
    PottaOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Playlist Sertanejos</Text>

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
    backgroundColor: '#483D8B',
    padding: 8,
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 80,
  },
  blocos: {
    flexDirection: 'row',
    backgroundColor: '#836FFF',
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
    musica: 'Quarta Cadeira',
    cantor_banda: 'Matheus e Kauan',
    genero: 'Sertanejo',
    ano: '2019',
    img: 'https://i1.sndcdn.com/artworks-000520207242-89ti0o-t500x500.jpg',
  },
  {
    uid: 2,
    musica: 'Até Você Voltar',
    cantor_banda: 'Henrique e Juliano',
    genero: 'Sertanejo',
    ano: '2014',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/c/cf/Capa_de_At%C3%A9_Voc%C3%AA_Voltar.jpg',
  },
  {
    uid: 3,
    musica: 'Supera',
    cantor_banda: 'Marília Mendonça',
    genero: 'Sertanejo',
    ano: '2019',
    img:
      'https://static1.purepeople.com.br/articles/9/28/63/39/@/3250168-marilia-mendonca-nao-deixou-de-lado-as-p-624x600-1.jpg',
  },
  {
    uid: 4,
    musica: 'Lance Individual',
    cantor_banda: 'Jorge e Mateus',
    genero: 'Sertanejo',
    ano: '2021',
    img:
      'https://static.meionorte.com/uploads/imagens/2020/11/13/38f1b5ab-6b89-4fe8-8e4f-a777038c30f5-4fb36694-110b-41ad-89a3-86ce81cd40e7.jpg',
  },
  {
    uid: 5,
    musica: 'Regime Fechado',
    cantor_banda: 'Simone e Simaria',
    genero: 'Sertanejo',
    ano: '2016',
    img:
      'https://images.genius.com/c7d81cb2b34b25dca3ef91c98612a576.1000x1000x1.jpg',
  },
  {
    uid: 6,
    musica: 'Loka',
    cantor_banda: 'Simone e Simaria pt. Anitta',
    genero: 'Sertanejo',
    ano: '2017',
    img:
      'https://www.estrelando.com.br/uploads/2021/05/19/simone-e-simaria-1621444170.jpg',
  },
  {
    uid: 7,
    musica: 'Zé da Recaída',
    cantor_banda: 'Gustavo Lima',
    genero: 'Sertanejo',
    ano: '2018',
    img: 'https://www.gusttavolima.com.br/img/historyMobile01.jpg',
  },
  {
    uid: 8,
    musica: 'Vou Ter Que Superar',
    cantor_banda: 'Matheus e Kauan',
    genero: 'Sertanejo',
    ano: '2019',
    img:
      'https://static1.purepeople.com.br/articles/4/27/16/34/@/3086615-filhos-de-matheus-e-kauan-foram-comparad-624x600-1.jpg',
  },
  {
    uid: 9,
    musica: 'Ser Humano ou Anjo',
    cantor_banda: 'Matheus e Kauan',
    genero: 'Sertanejo',
    ano: '2015',
    img:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/c/2/0/7/844161591206943.jpg',
  },
  {
    uid: 10,
    musica: 'Quando o Mel é Bom',
    cantor_banda: 'Simone e Simaria',
    genero: 'Sertanejo',
    ano: '2015',
    img:
      'https://s2.glbimg.com/PUAugSI5yj94k_oOwMwLT5TG7yo=/0x0:2336x3500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/l/Z/pd4Xc2TeOAjdiD6yCXBA/simoneesimaria.jpg',
  },
];
