import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';


export default function HomeNavigation({ navigation }) {

  return (
    <>
      <HomeScreen />
    </>
  )
}