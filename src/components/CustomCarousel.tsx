import * as React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import { theme } from '../utils/theme';
import { getImage } from '../utils/utils';

function CustomCarousel() {
  const width = Dimensions.get('window').width;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const data = [
    '#fff',
    '#ddd',
    '#ccc',
    '#bbb',
    '#aaa',
    '#999',
    '#888',
    '#777',
    '#666',
    '#555',
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onViewRef = React.useRef((viewableItems: any) => {
    console.log('onViewRef', viewableItems.viewableItems[0].index);
    setSelectedIndex(viewableItems.viewableItems[0].index);
    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  console.log('selectedIndex', selectedIndex);
  return (
    <View style={{ position: 'relative' }}>
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        viewabilityConfig={viewConfigRef.current}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={({ item, index, separators }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [width * 0.05, 0, -width * 0.05],
          });
          return (
            <View
              style={{
                width: width,
                height: 200,
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: item,
                  height: 200,
                }}>
                <Animated.Image
                  source={{
                    uri: 'https://i.hizliresim.com/1y8cjfc.png',
                    cache: 'force-cache',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: [{ translateX }],
                    resizeMode: 'cover',
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          right: 0,
          flexDirection: 'row',
        }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderWidth: 1,
              marginHorizontal: 5,
              borderColor:
                index === selectedIndex
                  ? theme.colors.getirPrimary500
                  : 'transparent',
              backgroundColor:
                index === selectedIndex
                  ? theme.colors.getirPrimary500
                  : theme.colors.gray,
              borderRadius: 5,
            }}></View>
        ))}
      </View>
    </View>
  );
}

export default CustomCarousel;
