import { Text, View, ImageBackground, Image, Pressable } from 'react-native';

export default function LandingScreen({ navigation }) {

  return (
    <View className="flex-1 bg-brand-navy">
        <ImageBackground
          className="flex-1 h-[70%]" 
          source={require('../assets/img/login-image.png')}
          resizeMode="cover">

            <View className=" bg-gray-soft rounded-[40px] mt-auto mx-4 mb-4 p-6" >
              <View className="bg-brand-yellow h-12 w-12 rounded-full mb-4"></View>

              <Text className="text-brand-navy font-bold text-2xl">SetList</Text>
              <Text className="text-brand-navy font-regular mb-3">Play your set anywhere</Text>
              <Text className="text-brand-navy font-regular opacity-80 mb-4 leading-normal">SetList provides a simple interface for storing, grouping, and performing our favorite songs</Text>

              <Pressable className="bg-brand-yellow active:bg-[#FFC486] h-16 rounded-full justify-center mb-4" onPress={() => navigation.navigate("Home")}>
                <Text className="font-bold text-brand-navy text-center">Find a song to play</Text>
              </Pressable>

              <Text className="text-brand-navy font-regular text-center">Have an account? Log in</Text>
              
            </View>

        </ImageBackground>

    </View>
  )
}