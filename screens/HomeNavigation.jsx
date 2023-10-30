import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();


export default function HomeNavigation({ navigation }) {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Home2" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Home3" component={HomeScreen} options={{headerShown: false}} />
      </Tab.Navigator>
    </>
  )
}