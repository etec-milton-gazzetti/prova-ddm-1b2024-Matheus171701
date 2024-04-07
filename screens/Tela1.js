import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Tela1 = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text>O Império Mongol</Text>
            </View>
        <View style= {styles.botoes}>
            <Button
                title="Desenvolvimento"
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
    }
});

export default Tela1;
