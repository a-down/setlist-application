import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import {  
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import LandingScreen from './screens/LandingScreen';

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
    <LandingScreen />
  );
}
