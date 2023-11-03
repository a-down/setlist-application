import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default CarouselItem = ({ title }) => {
  const { width } = useWindowDimensions();
  console.log(title)

  return (
    <View className="flex-1 justify-center items-center bg-red-200" style={{width: width, height: 400}}>
      <Text className="flex-1">{title}</Text>
    </View>
  )
}