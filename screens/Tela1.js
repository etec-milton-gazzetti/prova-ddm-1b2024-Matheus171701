import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import bandeira from '../assets/images.jpg'

const Tela1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>O Império Mongol</Text>
            </ScrollView>
            <ScrollView>
                <Image 
                    style={styles.imagem}
                    source={bandeira}
                />
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Tela2')}
                >
                    <Text style={styles.buttonText}>Desenvolvimento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: 'red' }]}
                    onPress={() => navigation.navigate('Tela3')}
                >
                    <Text style={styles.buttonText}>Sobre</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    titulo: {
        fontSize: 30,
        marginTop: 20,
        color: 'white',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
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
    imagem: {
        width: 300,
        height: 200,
        borderRadius: 50,
        marginTop: 20,
    },
});

export default Tela1;