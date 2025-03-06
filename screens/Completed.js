import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Tasks() {
    return (
      <View style={styles.container}>
        <Text style={styles.entry}>Now you see completed</Text>
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