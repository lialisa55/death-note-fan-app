import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

export default function Personagens() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Conheça os personagens</Text>
        <FlatList
          data={arrayPersonagens}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.items}>{item.nome}</Text>
              <Image style={styles.image} source={item.foto} />
              <Text style={styles.paragraph}> {item.descricao} </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 350,
    margin: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  items: {
    padding: 10,
    margin: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#380000',
    fontFamily: 'RobotoMono_400Regular',
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
    fontFamily: 'Metamorphous_400Regular',
  },
});

const arrayPersonagens = [
  {
    nome: 'Light Yagami',
    foto: require('../assets/lightyagami.png'),
    descricao:
      'É um dos melhores alunos do Japão e o principal protagonista da série. Uma vez que encontra o Death Note, se dispõe a acabar com todos os criminosos do mundo e criar um mundo onde ele é o deus. Ao usar o Death Note, o número de mortes inexplicáveis chama a atenção de todos os meios de comunicação, tornando-se o centro de atenção do Japão e do mundo. Mais tarde, ele terá que escapar das deduções de L para poder alcançar seus objetivos.',
  },
  {
    nome: 'L Lawliet',
    foto: require('../assets/llawliet.png'),
    descricao:
      'É um famoso detetive particular e principal antagonista anti-heróico do mangá/série Death Note, do qual ninguém conhecia sua verdadeira identidade, com exceção do seu assistente, Watari. É conhecido mundialmente por decifrar casos complicados, pois é uma pessoa extremamente inteligente.',
  },
  {
    nome: 'Misa Amane',
    foto: require('../assets/misaamane.png'),
    descricao:
      'É uma ídolo japonesa famosa que também é portadora de um Death Note. Misa ficou obcecada por Kira depois que ele matou o assassino de seus pais, pelo modo que se dedica a ajudar Light, fazendo se passar pelo "segundo Kira". Misa se apaixona profundamente por Light, sendo facilmente manipulada por ele, mas ele só a usa para alcançar seus objetivos',
  },
  {
    nome: 'Ryuk',
    foto: require('../assets/ryuk.png'),
    descricao:
      'É o shinigami (deus da morte no folclore japonês) entediado que indiretamente deu o Death Note a Light Yagami após jogá-lo no mundo humano como uma tentativa de ter entretenimento e atua como o deuteragonista da série. Após seu primeiro encontro com Light, ele age apenas como um acompanhante de Light e um mero espectador de tudo o que acontece ao longo da série. Ele também demonstra ser amoral, pois em um ponto ele declara a Light não estar do seu lado nem do L, estando lá apenas observando os passos de Light e neutro em relação as ações de Light durante a série.',
  },
];
