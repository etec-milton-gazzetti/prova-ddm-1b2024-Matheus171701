import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';

const Tela3 = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre</Text>
            <Text>
                Esta é a tela de informações sobre o aplicativo.
            </Text>

            <View stylle={styles.botoes}>
                <Button
                    title="Voltar para home"
                    onPress={() => navigation.navigate('Tela1')}
                />

                <Button
                    title="Voltar para desenvolvimento"
                    onPress={() => navigation.navigate('Tela2')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    botoes: {
        marginBottom: 20,
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 4,
          justifyContent: 'center'
        }
});

export default Tela3;
