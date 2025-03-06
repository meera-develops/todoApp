import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';


export default function Upcoming() {

    let data = [
      {
        key: "1",
        title: "Clean the car"    
      },
      {
        key: "2",
        title: "Buy groceries for the week"
      },
      {
        key: "3",
        title: "Walk the dog"
      },
      {
        key: "4",
        title: "Clean Room"
      }
    ]
    let renderItem = ({item}) => {
      return <Text style={styles.task}>{item.title}</Text>
    }


    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.tasksContainer}>
          <Text style={styles.entry}>Daily Tasks</Text>
          <FlatList data={data} renderItem={renderItem}></FlatList>
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
      fontSize: 40
    },
    task: {
      color: 'blue',
      marginTop: 50,
    },
  });