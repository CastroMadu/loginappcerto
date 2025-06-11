import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
 
const AddButton = () => {
  const handleAddTask = () => {
    Alert.alert('Adicionar Tarefa', 'Você clicou para adicionar uma tarefa.');
  };
 
  return (
    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
 
export default AddButton;