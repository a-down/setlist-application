import { Text, View, ScrollView, ImageBackground, Image, Pressable } from 'react-native';


export default function HomeScreen({ navigation }) {


  return (
    <>
      <View className="flex-1 bg-brand-navy">
        <View className="flex-row m-4 justify-between items-end h-20">
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
        </View>

        <ScrollView className="bg-gray-background flex-1 rounded-t-[20px] p-4">
          <View className="mb-4">
            <Text className="text-brand-navy font-bold text-2xl mt-4 mb-4">Upcoming Sets</Text>

            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand mb-2"></View>
            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand mb-2"></View>
            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand"></View>
          </View>
          <View>
            <Text className="text-brand-navy font-bold text-2xl mt-4 mb-4">Recently Viewed</Text>

            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand mb-2"></View>
            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand mb-2"></View>
            <View className="bg-white w-full h-20 rounded-[10px] shadow-brand"></View>
          </View>
          
        </ScrollView>
      </View>
    </>
  )
}