import { Text, View, ScrollView, ImageBackground, Image, Pressable } from 'react-native';



export default function SongsScreen() {


  return (
    <>
      <View className="flex-1 bg-brand-navy">
        <View className="flex-row m-4 justify-between items-end h-20">
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
        </View>

        <ScrollView className="bg-gray-background flex-1 rounded-t-[20px] p-4">
          <Text>Songs</Text>
          
        </ScrollView>
      </View>
    </>
  )
}