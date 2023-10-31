import { Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';


export default function SongCard({ slim = false }) {


  if (slim) {
    return (
      <View className="flex-row justify-between items-center bg-white w-full rounded-[10px] shadow-brand p-4 overflow-clip border-l-[10px] border-brand-yellow">

        <View style={{gap: 12}}>
          <Text className="text-xl font-bold text-brand-navy">Come On Get Higher</Text>
          <Text className="text-brand-navy opacity-80">Matt Nathanson</Text>
        </View>
        
      </View>
    )

  } else {
    return (
      <View className="flex-row justify-between items-center bg-white w-full rounded-[10px] shadow-brand p-4 overflow-clip border-l-[10px] border-brand-yellow">

        <View style={{gap: 12}}>
          <Text className="text-xl font-bold text-brand-navy">Come On Get Higher</Text>
          <Text className="text-brand-navy opacity-80">Matt Nathanson</Text>
        </View>

        <View className="bg-brand-navy w-[40px] h-[35px] rounded-sm" />
        
      </View>
    )

  }
}