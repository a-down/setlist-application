import { Text, View, ScrollView, ImageBackground, Image, Pressable, useWindowDimensions } from 'react-native';
import SetCard from '../components/SetCard';
import SongCard from '../components/SongCard';

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();


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

            <SetCard navigation={navigation}/>
            <SetCard navigation={navigation}/>
            <SetCard navigation={navigation}/>
            <SetCard navigation={navigation}/>
            <SetCard navigation={navigation}/>


          </View>
          <View style={{gap: 8, marginBottom: 192}}>
            <Text className="text-brand-navy font-bold text-2xl mt-4 mb-2">Recently Viewed</Text>

            <SongCard navigation={navigation} />
            <SongCard navigation={navigation} />
            <SongCard navigation={navigation} />
            <SongCard navigation={navigation} />
            <SongCard navigation={navigation} />
  
          </View>
          
        </ScrollView>

        <Pressable className="bg-white shadow-brand rounded-full absolute bottom-[102px] left-4 p-3 flex-row items-center" style={{width: width-32, gap: 8}} onPress={() => navigation.navigate('Search')}>
          <View className="w-6 aspect-square bg-brand-navy opacity-60 rounded-full"/>
          <Text className="mt-1 font-semibold text-brand-navy opacity-60">Search for a set or song</Text>
        </Pressable>

      </View>
    </>
  )
}