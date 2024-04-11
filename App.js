import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Tela1';
import Desenvolvimento from './screens/Tela2';
import Sobre from './screens/Tela3';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Tela1" component={Inicio} />
        <Stack.Screen name="Tela2" component={Desenvolvimento} />
        <Stack.Screen name="Tela3" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;