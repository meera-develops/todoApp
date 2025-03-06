import { StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

export default function AddTasks({ navigation, route }) {

    const { setTasks } = route.params;

    let [todo, setTodo] = useState('');

    let addTodo = () => {
      if (todo.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { key: (prevTasks.length + 1).toString(), description: todo, completed: false },
      ]);
      navigation.navigate('Upcoming Tasks'); // Navigate back to the previous screen after adding
    }
    };

    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Create Task"
          value={todo}
          onChangeText={setTodo}
        /> 
        <Button title="Add Task" onPress={addTodo} />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
  });