import { Text, View, ScrollView, ImageBackground, Image, Pressable, Alert } from 'react-native';
import SetCard from '../components/SetCard';


export default function SetsScreen() {


  return (
    <View className="flex-1 bg-brand-navy">
      <View className="flex-row m-4 justify-between items-end h-20">
        <View className="bg-brand-yellow h-10 w-10 rounded-full" />
        <View className="bg-brand-yellow h-10 w-10 rounded-full" />
      </View>

      <ScrollView className="bg-gray-background flex-1 rounded-t-[20px] p-4">
        <View style={{ marginBottom: 16}}>
          <View className=" flex-row justify-between mb-6">
            <Text className="text-brand-navy font-bold text-2xl mt-4">Sets</Text>

            <Pressable 
              className="bg-brand-orange rounded-[10px] flex-row p-4 items-center active:bg-[#E99170]" style={{gap: 8}}
              onPress={() => Alert.alert('New set form')}>
              <View className="w-5 h-5 rounded-full bg-gray-background " />
              <Text className="text-gray-background font-bold text-xl mt-1">New Set</Text>
            </Pressable>
          </View>
          
          <View style={{gap: 8, marginBottom: 32}}>
            <Text className="text-brand-navy text-xl mb-2">Upcoming Sets</Text>

            <SetCard slim={true}/>
            <SetCard slim={true}/>

          </View>

          <View style={{gap: 8, marginBottom: 16}}>
            <Text className="text-brand-navy text-xl mb-2">Your Sets</Text>

            <SetCard slim={true}/>
            <SetCard slim={true}/>

          </View>

          

        </View>
        
      </ScrollView>
    </View>
  )
}