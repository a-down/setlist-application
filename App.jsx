import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import {  
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
