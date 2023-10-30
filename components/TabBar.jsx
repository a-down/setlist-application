import { View, Text, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react'


export default function TabBar({ state, descriptors, navigation }) {
  const { width } = useWindowDimensions();
  const [ tabWidth, setTabWidth ] = useState(width - 32);

  function activeBackgroundColor(tab) {
    if (tab === 0) {
      return '#91A5CB'
    } else if (tab === 1) {
      return '#E9764C'
    } else if (tab === 2) {
      return '#FFB56E'
    }
  }

  function highlightPosition(tab) {
    if (tab === 0) {
      return 'flex-start'
    } else if (tab === 1) {
      return 'center'
    } else if (tab === 2) {
      return 'flex-end'
    }
  }

  const styles = StyleSheet.create({
    navBar: { 
      position: 'absolute', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      bottom: 32, 
      backgroundColor: '#2F3253', 
      width: tabWidth, 
      padding: 12, 
      marginHorizontal: 16, 
      borderRadius: 14 
    },
    buttonWrapper: { 
      height: 32,
      width: 84, 
      borderRadius: 8, 
      justifyContent: 'center', 
      alignItems: 'center',
      zIndex: 1,
    },
    navHighlight: {
      backgroundColor: activeBackgroundColor(state.index),
      zIndex: 0,
      height: 32,
      width: 84, 
      borderRadius: 8, 
    },
    navHighlightWrapper: {
      bottom: 12,
      left: 12,
      position: 'absolute',
      width: width-58,
      flexDirection: 'row',
      transform:
    }
  })

  return (
    <>

      <View style={styles.navBar}>
        <View style={[styles.navHighlightWrapper, { justifyContent: highlightPosition(state.index) }]}>
          <View style={styles.navHighlight}/>
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
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.buttonWrapper]}
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

