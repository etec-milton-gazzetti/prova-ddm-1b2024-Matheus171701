import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView, ScrollView, StatusBar, Pressable, ImageBackground } from 'react-native';

const Tela1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>O Império Mongol</Text>
            </ScrollView>
            <ScrollView>
                <Button title="Desenvolvimento"
                onPress={() => navigation.navigate('Tela2')}
                style={styles.botoes}
                />
                <Button
                    title="Sobre"
                    onPress={() => navigation.navigate('Tela3')}
                    style={styles.botoes}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    titulo: {
        flex: 1,
    },
    botoes: {
        felx: 1,
        backgroundColor: 'red',
    }
});

export default Tela1;
