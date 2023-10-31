import { View, Text, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';


export default function TabBar({ state, descriptors, navigation }) {
  const { width } = useWindowDimensions();

  // access with index positions
    // color of tab highlight
  const activeBackgroundColorMap = ['#91A5CB', '#E9764C', '#FFB56E']
    // position of tab highlight
  const highlightPositionMap = ['flex-start', 'center', 'flex-end']

  return (
    <>

      <View 
        className="absolute flex-row justify-between items-center bottom-8 bg-brand-navy p-3 mx-4 rounded-[14px]" 
        style={{width: width-32}}>
        <View 
          className="absolute bottom-3 left-3 flex-row" 
          style={{ justifyContent: highlightPositionMap[state.index], width: width-58 }}>
          <View 
            className="z-0 h-8 w-[84px] rounded-[8px]" 
            style={{backgroundColor: activeBackgroundColorMap[state.index]}}/>
        </View>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              className="h-8 w-[84px] rounded-[8px] justify-center items-center z-10"
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label}
            >
              <Text style={{ zIndex: 2, fontFamily: 'Poppins_700Bold', color: isFocused ? '#2F3253' : '#fff'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  )
}

