import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CheckBox } from '@rneui/themed';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useTasks } from '../context/TaskContext';


export default function Completed() {
    const { tasks, toggleTask, deleteTask } = useTasks();

    const completedTasks = tasks.filter(task => task.completed);

    let renderItem = ({item}) => {
      return (
        <SafeAreaView style={styles.taskCard}>
          <CheckBox
            checked={item.completed}
            onPress={() => toggleTask(item.key)}
            containerStyle={styles.checkboxContainer}
            checkedColor="green"
          />
          <Text style={[styles.task, styles.taskText]}>{item.description}</Text>
          <TouchableOpacity onPress={() => deleteTask(item.key)} style={styles.trashButton}>
            <Fontisto name="trash" size={20} color="#A8626C" />
          </TouchableOpacity>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.tasksContainer}>
          <Text style={styles.entry}>Completed</Text>
          {completedTasks.length === 0 ? (
            <Text style={styles.emptyText}>No completed tasks yet</Text>
          ) : (
            <FlatList data={completedTasks} renderItem={renderItem} keyExtractor={(item) => item.key}></FlatList>
          )}
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
    entry: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 25,
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
    emptyText: {
      fontSize: 16,
      color: 'gray',
      marginTop: 20,
    },
    taskText: {
      flex: 1,
    },
    trashButton: {
      padding: 10,
      marginLeft: 'auto',
    }
  });
