import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sobre from './sobre';
import Personagens from './personagens';
import Musica from './musica';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Personagens" component={Personagens} />
        <Stack.Screen name="Trilha Sonora" component={Musica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}