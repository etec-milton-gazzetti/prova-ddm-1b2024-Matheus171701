import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, StatusBar, Header} from 'react-native';
import eu from '../assets/fotominha.jpeg'

const Tela3 = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Sobre</Text>
            <ScrollView>
              <Image source={eu} style={styles.eu}/>
            </ScrollView>
            <ScrollView style={styles.textcontainer}>
            <Text style={styles.informa}>
                Nome do aluno: Matheus Henrique do Santos Souza
            </Text>

            <Text style={styles.informa}>
                RM: 07661
            </Text>

            <Text style={styles.informa}>
                Série: 3º Info
            </Text>

            <Text style={styles.informa}>
                Professor: Graziani zanfolin
            </Text>

            <Text style={styles.explica}>
            O porquê de eu ter escolhido o tema 'Império Mongol' foi por conta da minha grande admiração, 
            possuída tanto pela história quanto pela trajetória do império citado. Como amante da história, 
            é necessário reconhecer que o Império Mongol foi um dos maiores impérios existentes em toda a história humana,
            em território, poder de expansão e militar
            </Text>
            </ScrollView>

            <ScrollView style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Tela2')}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: 'red' }]}
          onPress={() => navigation.navigate('Tela1')}
        >
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
      </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#142157'
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
      padding: 5,
      backgroundColor: 'red',
      borderRadius: 15
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
    informa: {
      color: 'white',
      padding: 10,
      fontSize: 15,
      textAlign: 'center'
    },
    
    explica: {
      color: 'white',
      padding: 10,
      fontSize: 15,
      textAlign: 'justify'
    },
    eu: {
      width: 150,
      height: 150,
      borderRadius: 300
    }
});

export default Tela3;
