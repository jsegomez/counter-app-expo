import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FloatingActionButton from './components/FloatingActionButton';

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = (value: number) => {
    setCount(count + value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <Text>Veamos si se esta actualizando</Text>

      <View style={styles.buttonContainer}>
        <FloatingActionButton onPress={() => handlePress(1)} title="+" position="right" />
        <FloatingActionButton onPress={() => handlePress(-1)} title="-" position="left" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    fontWeight: '200',
    color: '#000000',
  },

  buttonContainer: {
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
});
