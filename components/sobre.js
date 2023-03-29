import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Sobre Death Note</Text>
        <Image
          style={styles.image}
          source={require('../assets/lightryuk.png')}
        />
        <Text style={styles.paragraph}>
          Death Note (デスノート Desu Nōto?, lit. "Caderno da Morte") é uma
          série de mangá escrita por Tsugumi Ohba e ilustrada por Takeshi Obata.
          Os capítulos do mangá foram serializados na revista semanal japonesa
          Weekly Shōnen Jump de 2003 até 2006, com os capítulos compilados em um
          total de 12 volumes tankōbon e lançados pela editora Shueisha. No
          Brasil, a série de mangá foi licenciada publicada em duas versões pela
          editora JBC, que também lançou as duas light novels da série. Em
          Portugal, o mangá foi licenciado pela Viz Media Europa e publicado
          pela Editora Devir.
        </Text>
        <Text style={styles.title}>Enredo</Text>
        <Text style={styles.paragraph}>
        Light Yagami é um estudante da cidade de Tóquio, no Japão. Um dia, sua vida sofre uma mudança radical, quando ele está entediado, encontra um estranho caderno sobrenatural chamado "Death Note", caído no chão. Dentro do caderno havia instruções sobre sua utilização, onde dizia que se escrevesse o nome de uma pessoa e visualizasse mentalmente o rosto desta, ela morreria de um ataque cardíaco em 40 segundos (se acaso a morte não for especificada). No início, Light desconfiava da autenticidade do caderno, mas depois de testá-lo em duas ocasiões, ele percebe que seu poder era verdadeiro. Depois de cinco dias, ele é visitado pelo verdadeiro proprietário do Death Note, um shinigami chamado Ryuk, que conta que ele tinha deixado cair o caderno na Terra porque estava entediado, e Light, então, lhe diz que o seu objetivo era matar todos os criminosos, a fim de purificar o mundo do mal e tornar-se o "deus do novo mundo". Mais tarde, o número de mortes inexplicáveis dos criminosos chama a atenção do FBI e de um famoso detetive particular conhecido como "L". L deduz rapidamente que o assassino em série — apelidado pelo público como "Kira" (キラ? derivado da pronúncia típica japonesa da palavra inglesa "killer", lit. "assassino") — estava no Japão. Também percebe que Kira poderia matar pessoas sem a necessidade de colocar um dedo nelas. Light descobre que L será um de seus maiores rivais, a partir desse momento, começa um jogo psicológico entre eles.
        </Text>
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
