import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';


export default function Upcoming() {

    let data = [
      {
        key: "1",
        title: "Clean the car",
        checked: false    
      },
      {
        key: "2",
        title: "Buy groceries for the week",
        checked: true    
      },
      {
        key: "3",
        title: "Walk the dog",
        checked: false     
      },
      {
        key: "4",
        title: "Clean Room",
        checked: true
      },
    ]

    const [tasks, setTasks ] = useState(data);

    let toggleCheckbox = (key) => {
      const updatedTasks = tasks.map(task => 
        task.key === key ? { ...task, checked: !task.checked } : task
      );
      setTasks(updatedTasks);  // Update the state with the new tasks array
    };

    let renderItem = ({item}) => {
      return (
        <SafeAreaView style={styles.taskCard}>
          <CheckBox 
            checked={item.checked}
            onPress={() => toggleCheckbox(item.key)}
            containerStyle={styles.checkboxContainer}
          />
          <Text style={[styles.task, item.checked && styles.checkedText]}>{item.title}</Text>
        </SafeAreaView>

        
      );
    }


    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.tasksContainer}>
          <Text style={styles.entry}>Daily Tasks</Text>
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
    entry : {
      marginTop: 25,
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
      color: 'gray',
    },
  });