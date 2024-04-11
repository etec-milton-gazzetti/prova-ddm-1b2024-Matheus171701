import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import gengis from '../assets/home.png'

const Tela2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela de Desenvolvimento</Text>

      <ScrollView>
        <Text style={styles.texto}>
          O Império Mongol foi um dos maiores impérios da história, estendendo-se por vastas áreas da Ásia durante o século XIII. Originário das estepes da Mongólia, foi fundado por Genghis Khan no início do século XIII. Sob o comando de líderes como Genghis Khan e seus sucessores, incluindo Kublai Khan, os mongóis conquistaram um território que se estendia desde a Europa Oriental até a Ásia Central e a China.

          A expansão do Império Mongol foi caracterizada por sua ferocidade militar, estratégias inovadoras, mobilidade e táticas de guerra eficazes, incluindo o uso de cavalos e arqueiros montados. Eles também eram conhecidos por sua administração eficiente e tolerância religiosa, permitindo que diferentes culturas coexistissem sob seu domínio.

          No entanto, o império enfrentou desafios devido à vasta extensão territorial, bem como problemas de sucessão após a morte de líderes-chave. Após o apogeu sob Kublai Khan, o império gradualmente começou a se fragmentar em diferentes khanatos e foi eventualmente absorvido por outros impérios e dinastias locais.

          O legado do Império Mongol incluiu contribuições significativas para o intercâmbio cultural e comercial entre o Oriente e o Ocidente, bem como a disseminação de ideias, tecnologias e práticas administrativas. Embora tenha sido um período de conquista e dominação, o Império Mongol deixou uma marca duradoura na história global.
        </Text>
      </ScrollView>
      <ScrollView style={styles.images}>
    <Image />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Tela1')}
        >
          <Text style={styles.buttonText}>Voltar para home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('Tela3')}
        >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    color: 'white'
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  botao: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  texto: {
    justifyContent: 'center',
    textAlign: 'justify',
    color: 'white'
  },
  images:{

  }
});

export default Tela2;
