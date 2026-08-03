import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface FloatingActionButtonProps {
  onPress: () => void;
  title: string;
  position: 'left' | 'right';
}

export default function FloatingActionButton({ onPress, title, position }: FloatingActionButtonProps) {
  return (
    <View>
        <TouchableOpacity
            onPress={onPress}
            style={[styles.floatingBotton, position === 'right' ? { right: 20 } : { left: 20 }]}
        >
            <Text style={{color: '#fff', textAlign: 'center'}}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    floatingBotton: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#65558f',
        padding: 20,
        width: 65,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
    },
})