import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SongsScreen from './SongsScreen';
import SetsScreen from './SetsScreen';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();


export default function HomeNavigation({ navigation }) {

  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props}/>}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Sets" component={SetsScreen} options={{headerShown: false}} />
        <Tab.Screen name="Songs" component={SongsScreen} options={{headerShown: false}} />
      </Tab.Navigator>
    </>
  )
}