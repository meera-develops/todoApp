import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Tasks() {
    return (
      <View style={styles.container}>
        <Text style={styles.entry}>In a later update, completed tasks will go here. Not required for the purpose of this assignment</Text>
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
    entry : {
      marginHorizontal: 20,
      color: 'red', 
      fontWeight: 'bold',
      fontSize: 20
    },
  });