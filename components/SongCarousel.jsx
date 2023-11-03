import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  useWindowDimensions,
  Pressable
} from 'react-native';
import { useRef, useState, useEffect } from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function SongCarousel() {
  const [ index, setIndex ] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollToIndex({index: index, animated: true});
  }, [index])

  function handlePress() {
    console.log('pressing')
    if (index === DATA.length - 1) {
      return;
    }

    setIndex(index + 1);
  }

  const CarouselItem = ({title}) => {
    const { width } = useWindowDimensions();
  
    return (
      <Pressable className="flex-1 justify-center items-center bg-red-200" style={{width: width-32}} onPress={handlePress}>
        <Text className="flex-1">{title}</Text>
      </Pressable>
    )
  };

  return (
    <View className="flex-1 justify-center">
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        data={DATA}
        renderItem={({item}) => <CarouselItem title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
      />
    </View>
  );
};