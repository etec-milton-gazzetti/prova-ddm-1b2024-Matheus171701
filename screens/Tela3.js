import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tela3 = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre</Text>
            <Text>
                Esta é a tela de informações sobre o aplicativo.
            </Text>
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
});

export default Tela3;
