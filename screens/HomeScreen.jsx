import { Text, View, ScrollView, ImageBackground, Image, Pressable } from 'react-native';
import SetCard from '../components/SetCard';
import SongCard from '../components/SongCard';

export default function HomeScreen({ navigation }) {


  return (
    <>
      <View className="flex-1 bg-brand-navy">
        <View className="flex-row m-4 justify-between items-end h-20">
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
        </View>

        <ScrollView className="bg-gray-background flex-1 rounded-t-[20px] p-4">
          <View style={{gap: 8, marginBottom: 16}}>
            <Text className="text-brand-navy font-bold text-2xl mt-4 mb-2">Upcoming Sets</Text>

            <SetCard />
            <SetCard />
            <SetCard />
            <SetCard />
            <SetCard />

          </View>
          <View style={{gap: 8, marginBottom: 128}}>
            <Text className="text-brand-navy font-bold text-2xl mt-4 mb-2">Recently Viewed</Text>

            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />

          </View>
          
        </ScrollView>
      </View>
    </>
  )
}