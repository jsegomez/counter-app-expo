import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.floatingBottonRight}>
        <Text style={{color: '#fff'}}>+1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.floatingBottonLeft}>
        <Text style={{color: '#fff'}}>-1</Text>
      </TouchableOpacity>

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

  floatingBottonLeft: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#65558f',
    padding: 20,
    width: 60,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },

  floatingBottonRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  }
});
