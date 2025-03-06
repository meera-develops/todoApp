import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function Upcoming() {

    let navigation = useNavigation();
    let addTask = () => {
      navigation.navigate('Add Tasks', {setTasks});
    }

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
            <Fontisto name='plus-a' size={30} color="black" style={styles.plusSign} onPress={addTask}/>
          </SafeAreaView>

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
      marginLeft: 70,
      marginTop: 9,
    }
  });