import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  function sortearNumero() {
    const numero = Math.floor(Math.random() * 100) + 1;
    navigation.navigate('Resultado', { numero });
  }

  return (
    <View style={styles.container}>
      <Button title="Sortear Número" onPress={sortearNumero} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
