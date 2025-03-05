import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Tasks() {
    return (
      <View style={styles.container}>
        <Text style={styles.entry}>NOW YOU SEE THE TASKS</Text>
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
      color: 'red', 
      fontWeight: 'bold',
      fontSize: 20
    },
  });