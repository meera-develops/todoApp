import 'react-native-gesture-handler';
import Completed from './screens/Completed';
import Upcoming from './screens/Upcoming';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTasks from './screens/AddTasks';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Upcoming Tasks'
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#A8626C',
        },
        headerStyle: {
          backgroundColor: '#A8626C', 
        },
        headerTintColor: 'white', 
        headerTitleAlign: 'center', 
        headerTitleStyle: {
          fontSize: 20
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 14
        },
        tabBarLabelStyle: {
          marginTop: 12, // Increase this value to move the text lower
        },
        tabBarIconStyle: {
          marginBottom: -1, // Increase this value to move the icon up
        },
      }}>
        <Tab.Screen 
        name='Add Tasks' 
        component={AddTasks}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="plus-a" size={30} color={focused ? 'black' : 'white'} />
          ),
        }} />
        <Tab.Screen name='Upcoming Tasks' component={Upcoming}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="clock" size={27} color={focused ? 'black' : 'white'} />
          ),
        }}>

        </Tab.Screen>
        <Tab.Screen name='Completed Tasks' component={Completed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="checkbox-active" size={27} color={focused ? 'black' : 'white'} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

