import { View, Text, Pressable, useWindowDimensions } from 'react-native';


export default function SongDisplay({ navigation }) {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 bg-brand-navy">
      <View className="flex-1 bg-gray-background mt-12 rounded-t-[20px]">
        <View className="p-4">

          <Pressable onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </Pressable>

          <Text className="text-2xl font-medium text-brand-navy mt-4">Come On Get Higher</Text>
          <Text className=" text-lg text-brand-navy font-medium opacity-80 mt-2">Matt Nathanson</Text>
          <View className="flex-row" style={{gap: 16}}>
            <Text className=" text-lg text-brand-navy font-semibold opacity-80 mt-4">
              Key:{' '}
              <Text className="font-bold">C</Text>
            </Text>

            <Text className=" text-lg text-brand-navy font-semibold opacity-80 mt-4">
              Chords:{' '}
              <Text className="font-bold">C Em F G Am</Text>
            </Text>
          </View>

          <View className="flex-row w-full mt-4" style={{gap: 16}}>
            <Pressable className="bg-brand-navy rounded-xl flex-1">
              <Text className="text-lg font-semibold text-brand-yellow text-center py-4">Capo (7)</Text>
            </Pressable>
            <Pressable className="bg-transparent rounded-xl flex-1">
              <Text className="text-lg font-semibold text-brand-yellow text-center py-4">Capo (7)</Text>
            </Pressable>
          </View>
        </View>

        
        <View className="w-full h-full flex-1 bg-white rounded-t-[10px] p-4">
          <View className="flex-row justify-between">
            <Text className="text-brand-navy text-2xl">{'<'}</Text>
            <Text className="text-brand-navy text-lg font-medium mt-1">Chorus</Text>
            <Text className="text-brand-navy text-2xl">{'>'}</Text>
          </View>

        </View>
      </View>

    </View>
  )
}