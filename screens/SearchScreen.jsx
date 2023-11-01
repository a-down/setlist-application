import { View, ScrollView, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import SetCard from '../components/SetCard';
import SongCard from '../components/SongCard';

export default function SearchScreen({ navigation }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <View className="flex-1 bg-brand-navy">
        <View className="flex-row m-4 justify-between items-end h-20">
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
          <View className="bg-brand-yellow h-10 w-10 rounded-full" />
        </View>

      <ScrollView className="bg-gray-background flex-1 rounded-t-[20px] p-4">
        <View style={{ marginBottom: 16}}>

          <Pressable onPress={() => navigation.goBack()}>
            <Text className="text-brand-navy text-xl mb-2">Back</Text>
          </Pressable>

          <Pressable className="bg-white shadow-brand rounded-full p-3 flex-row items-center" style={{width: width-32, gap: 8}} onPress={() => navigation.navigate('Search')}>
            <View className="w-6 aspect-square bg-brand-navy opacity-60 rounded-full"/>
            <Text className="mt-1 font-semibold text-brand-navy opacity-60">Search for a set or song</Text>
          </Pressable>
          
          <View style={{gap: 8, marginBottom: 32, marginTop: 24}}>
            <View className="flex-row justify-between w-full">
              <Text className="text-brand-navy text-xl mb-2">Songs</Text>
              <Text className="text-brand-navy opacity-60 text-xl mb-2">See All</Text>
            </View>

            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>

          </View>

          <View style={{gap: 8, marginBottom: 192}}>
            <View className="flex-row justify-between w-full">
              <Text className="text-brand-navy text-xl mb-2">Sets</Text>
              <Text className="text-brand-navy opacity-60 text-xl mb-2">See All</Text>
            </View>

            <SetCard/>
            <SetCard/>
            <SetCard/>
            <SetCard/>
  

          </View>

        </View>
        
      </ScrollView>
    </View>
    </>
  )
}