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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Carousel from "react-native-reanimated-carousel";



const data = [
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

  function handleTap() {
    if (index === data.length - 1) {
      return;
    }
    setIndex(index + 1);
  }

  const CarouselItem = ({title}) => {
    const { width } = useWindowDimensions();
  
    return (
      <GestureRecognizer 
        onSwipeRight={() => onSwipeRight()}
        onSwipeLeft={() => onSwipeLeft()}
        config={config}
        className="flex-1">
        <Pressable className="flex-1 justify-center items-center bg-red-200" style={{width: width-32}} onPress={handleTap}>
          <Text className="flex-1">{title}</Text>
        </Pressable>
      </GestureRecognizer>
    )
  };

  function onSwipeRight() {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  }

  function onSwipeLeft() {
    if (index === data.length - 1) {
      return;
    }
    setIndex(index + 1);
  }

  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
  };
 

  return (

      <View className="flex-1 justify-center">
        <FlatList
          ref={ref}
          initialScrollIndex={index}
          data={data}
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