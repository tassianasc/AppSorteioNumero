import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultadoScreen({ route, navigation }) {
  const { numero } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>🎉 Número sorteado: {numero}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 26, marginBottom: 20, fontWeight: 'bold' },
});
