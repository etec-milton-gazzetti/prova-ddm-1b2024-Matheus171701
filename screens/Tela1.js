import React from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';

const Tela1 = ({ navigation }) => {
    return(
        <view style={styles.container}>
            <View style={styles.titulo}>
                <Text>O Império Mongol</Text>
            </View>
        </view>
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
  
  export default Tela1;