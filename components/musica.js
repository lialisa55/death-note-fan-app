import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Musica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conheça a trilha sonora</Text>
              <FlatList
          data={arrayMusica}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.items}>{item.nome}</Text>
              <Image style={styles.image} source={item.capa} />
              <Text style={styles.paragraph}> {item.descricao} </Text>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 350,
    margin: 12
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#110000',
    fontFamily: 'RobotoMono_400Regular',
  },
  title: {
    margin: 10,
    fontSize: 46,
    textAlign: 'center',
    color: 'white',
    fontFamily: "Metamorphous_400Regular",
  },
});

const arrayMusica = [
  {nome: 'Death Note Original Soundtrack', capa: require('../assets/Death_Note_OST1.png'), descricao: 'A trilha sonora original de Death Note para a adaptação do anime foi lançada pela primeira vez no Japão em 21 de dezembro de 2006 e foi publicada pela VAP. Contém música da série, composta por Yoshihisa Hirano e Hideki Taniuchi, com os primeiros temas de abertura e encerramento cantados pela banda japonesa Nightmare no formato TV size.[1] As faixas 1-18 foram compostas e arranjadas por Hideki Taniuchi, enquanto as faixas 19-28 foram compostas e arranjadas por Yoshihisa Hirano. A capa da primeira impressão apresentava obras de arte que brilham no escuro.'},
  {nome: 'Death Note Original Soundtrack II', capa: require('../assets/Death_note_Ost2.png'), descricao: 'A trilha sonora original do Death Note II para a adaptação do anime foi lançada pela primeira vez no Japão em 21 de março de 2007 e foi publicada pela VAP. Contém música da série, composta por Hideki Taniuchi e Yoshihisa Hirano. Ele também apresenta os novos temas de abertura e encerramento de Maximum the Hormone no formato de tamanho de TV. As faixas 1-8 foram compostas e arranjadas por Yoshihisa Hirano, enquanto as faixas 9-28 foram compostas e arranjadas por Hideki Taniuchi. Observe que, embora a faixa 19 tenha o mesmo título da faixa 14 no primeiro OST, elas são na verdade duas músicas diferentes. Estranhamente, a faixa 5 é idêntica à faixa 28 da primeira OST, embora tenham títulos diferentes. A capa da primeira impressão apresentava obras de arte que brilham no escuro.'},
  {nome: 'Death Note Original Soundtrack III', capa: require('../assets/Death_Note_OSZT_3.png'), descricao: 'Death Note Original Soundtrack III, lançado em 27 de junho de 2007 (Japão), é o terceiro álbum da trilha sonora da série de anime Death Note. A música foi criada pelo compositor e músico Hideki Taniuchi e pelo compositor Yoshihisa Hirano. As faixas 1-21 foram compostas e arranjadas por Hideki Taniuchi, enquanto as faixas 22-28 foram compostas e arranjadas por Yoshihisa Hirano. O álbum traz uma faixa cantada por Aya Hirano, interpretando sua personagem Misa Amane da série. Também aparece nesta trilha sonora o tema de encerramento Coda～Death Note, que pode ser ouvido no final do episódio final do anime quando os créditos são mostrados. A capa da primeira impressão apresentava obras de arte que brilham no escuro.'}
]