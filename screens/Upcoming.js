import { StyleSheet, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useTasks } from '../context/TaskContext';


export default function Upcoming() {
    const { tasks, toggleTask, addTask, deleteTask } = useTasks();
    const [newTask, setNewTask] = useState('');
    const [addingTask, setAddingTask] = useState(false);
    const [recentlyCompleted, setRecentlyCompleted] = useState([]);

    // Show incomplete tasks plus recently completed ones (for visual feedback)
    const upcomingTasks = tasks.filter(task => !task.completed || recentlyCompleted.includes(task.key));

    const handleToggleTask = (key) => {
      const task = tasks.find(t => t.key === key);
      if (task && !task.completed) {
        // Task is being completed - add to recently completed for visual feedback
        setRecentlyCompleted(prev => [...prev, key]);
        toggleTask(key);
        // Remove from recently completed after delay
        setTimeout(() => {
          setRecentlyCompleted(prev => prev.filter(k => k !== key));
        }, 1000);
      } else {
        // Task is being uncompleted - just toggle
        toggleTask(key);
      }
    };

    let handleAddTask = () => {
      if (newTask.trim()) {
        addTask(newTask);
        setNewTask('');
        setAddingTask(false);
      }
    };

    let renderItem = ({item}) => {
      return (
        <SafeAreaView style={styles.taskCard}>
          <CheckBox
            checked={item.completed}
            onPress={() => handleToggleTask(item.key)}
            containerStyle={styles.checkboxContainer}
            checkedColor="green"
          />
          <Text style={[styles.task, item.completed && styles.checkedText, styles.taskText]}>{item.description}</Text>
          <TouchableOpacity onPress={() => deleteTask(item.key)} style={styles.trashButton}>
            <Fontisto name="trash" size={20} color="#A8626C" />
          </TouchableOpacity>
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
              onSubmitEditing={handleAddTask}
            />
            <TouchableOpacity onPress={handleAddTask}>
              <Text style={styles.addButton}>Add Task</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}

          <FlatList data={upcomingTasks} renderItem={renderItem} keyExtractor={(item) => item.key}></FlatList>
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
      fontSize: 18
    },
    taskCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      marginBottom: 15,
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
    },
    taskText: {
      flex: 1,
    },
    trashButton: {
      padding: 10,
      marginLeft: 'auto',
    }
  });