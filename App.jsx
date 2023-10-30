import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className=" text-blue-400 text-2xl text-center px-8 font-bold" style={{fontFamily: 'Poppins_400Regular'}}>Time to build a React Native App with Tailwind!</Text>
    </View>
  );
}
