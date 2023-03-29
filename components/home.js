import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Metamorphous_400Regular, RobotoMono_400Regular } from '@expo-google-fonts/dev';

export default function Home(props) {
  let [fontsLoaded] = useFonts({
    Metamorphous_400Regular,
    RobotoMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Death Note</Text>
        <ScrollView>
          <Image
            style={styles.image}
            source={require('../assets/mainimage.png')}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Sobre');
            }}>
            <Text style={styles.items}>Sobre o anime</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Personagens');
            }}>
            <Text style={styles.items}>Personagens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Trilha Sonora');
            }}>
            <Text style={styles.items}>Trilha sonora</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
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
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
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
  title: {
    margin: 24,
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontFamily: "Metamorphous_400Regular",
  },
});
