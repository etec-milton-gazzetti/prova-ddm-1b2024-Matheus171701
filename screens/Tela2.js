import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Tela2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Desenvolvimento</Text>
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('Tela3')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Tela2;
