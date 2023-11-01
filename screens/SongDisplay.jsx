import { View, Text, Pressable, useWindowDimensions } from 'react-native';


export default function SongDisplay({ navigation }) {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 bg-brand-navy">
      <View className="flex-row m-4 justify-between items-end h-4" />

      <View className="bg-gray-background flex-1 rounded-t-[20px] p-4">

        <Pressable onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>

        <Text className="text-2xl font-medium text-brand-navy mt-6">Come On Get Higher</Text>

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

      </View>

      <View className="bg-white shadow-brand rounded-full absolute bottom-[102px] left-4 p-3 flex-row items-center" style={{width: width-32, gap: 8}}>
        <View className="w-6 aspect-square bg-brand-navy opacity-60 rounded-full"/>
        <Text className="mt-1 font-semibold text-brand-navy opacity-60">Search for a set</Text>
      </View>
    </View>
  )
}