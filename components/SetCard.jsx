import { Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';


export default function SetCard({ slim = false }) {

  if (slim) {
    return (
      <View className="flex-row justify-between items-center bg-white w-full rounded-[10px] shadow-brand p-4 overflow-clip border-l-[10px] border-brand-orange">

        <View className="flex-row w-full justify-between">
          <Text className="text-xl font-bold text-brand-navy mt-1">Christmas 2023</Text>
          <Text className="text-brand-navy mt-1">12/24/23</Text>
        </View>
        
      </View>
    )

  } else {
    return (
      <View className="flex-row justify-between items-center bg-white w-full rounded-[10px] shadow-brand p-4 overflow-clip border-l-[10px] border-brand-orange">

        <View style={{gap: 12}}>
          <Text className="text-xl font-bold text-brand-navy">Christmas 2023</Text>
          <View className="flex-row justify-start" style={{gap: 12}}>
            <Text className="text-brand-navy">12/24/23</Text>
            <Text className="text-brand-navy opacity-80">12 Songs</Text>
          </View>
        </View>

        <View className="bg-brand-navy w-[40px] h-[35px] rounded-sm" />
        
      </View>
    )

  }
}