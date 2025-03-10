import { StyleSheet, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function Upcoming() {

    let data = [
      {
        key: "1",
        description: "Clean the car",
        completed: false    
      },
      {
        key: "2",
        description: "Buy groceries for the week",
        completed: true    
      },
      {
        key: "3",
        description: "Walk the dog",
        completed: false     
      },
      {
        key: "4",
        description: "Clean Room",
        completed: true
      },
    ]

    const [tasks, setTasks ] = useState(data);
    const [newTask, setNewTask] = useState('');
    const [addingTask, setAddingTask] = useState(false);

    let addTask = () => {
      if (newTask.trim()) {
        const newTaskObject = {
          key: (tasks.length + 1).toString(), // Generate a new key (or you could use a unique id generator)
          description: newTask,
          completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask(''); // Clear the input field
        setAddingTask(false); // Close the input field after adding the task
      }
    }

    let toggleCheckbox = (key) => {
      const updatedTasks = tasks.map(task => 
        task.key === key ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };

    let renderItem = ({item}) => {
      return (
        <SafeAreaView style={styles.taskCard}>
          <CheckBox 
            checked={item.completed}
            onPress={() => toggleCheckbox(item.key)}
            containerStyle={styles.checkboxContainer}
            checkedColor="green"
          />
          <Text style={[styles.task, item.completed && styles.checkedText]}>{item.description}</Text>
        </SafeAreaView>
      );
    }


    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.tasksContainer}>

          <SafeAreaView style={styles.entryContainer}>
            <Text style={styles.entry}>Daily Tasks</Text>
            <Fontisto name='plus-a' size={30} color="black" style={styles.plusSign} onPress={() => setAddingTask(true)}/>
            <Text style={styles.iconLabel} onPress={() => setAddingTask(true)}>Add New Task</Text>
          </SafeAreaView>
          {addingTask && (
          <SafeAreaView style={styles.addTaskContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter new task"
              value={newTask}
              onChangeText={setNewTask}
              onSubmitEditing={addTask}
            />
            <TouchableOpacity onPress={addTask}>
              <Text style={styles.addButton}>Add Task</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}

          <FlatList data={tasks} renderItem={renderItem} keyExtractor={(item) => item.key}></FlatList>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tasksContainer: {
      marginLeft: 20,
    },
    entryContainer: {
      flexDirection: 'row',
      marginTop: 25
    },
    entry : {
      color: 'black', 
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 25
    },
    task: {
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    },
    taskCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    checkboxContainer: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      marginRight: 10,
    },
    checkedText: {
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
      color: 'gray',
    },
    plusSign: {
      marginLeft: 20,
      marginTop: 9,
      marginRight: 10
    },
    taskCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    checkboxContainer: {
      marginRight: 10,
    },
    task: {
      fontSize: 18,
    },
    checkedText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    addTaskContainer: {
      marginTop: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      marginHorizontal: 15
    },
    inputField: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 10,
    },
    addButton: {
      color: '#007BFF',
      textAlign: 'center',
      fontSize: 18,
    },
    iconLabel: {
      marginTop: 18,
      fontSize: 14,
      fontWeight: 'bold'
    }
  });