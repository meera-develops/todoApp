import 'react-native-gesture-handler';
import Tasks from './screens/Tasks';
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
      initialRouteName='Add Tasks'
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#A8626C',
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: 14
        }
      }}>
        <Tab.Screen 
        name='Add Tasks' 
        component={AddTasks}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={24} color={focused ? 'black' : 'white'} />
          ),
        }} />
        <Tab.Screen name='Upcoming Tasks' component={Upcoming}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="clock" size={20} color={focused ? 'black' : 'white'} />
          ),
        }}>

        </Tab.Screen>
        <Tab.Screen name='Completed Tasks' component={Tasks}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="checkbox-active" size={20} color={focused ? 'black' : 'white'} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

