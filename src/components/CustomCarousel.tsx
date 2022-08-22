import React, { useCallback, useEffect } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import { NavigationProps } from '../Layout/StackNavigator';
import { theme } from '../utils/theme';
import { getImage } from '../utils/utils';
type Props = {
  showStepper?: boolean;
  data: any[];
  imagePrefix: string;
  navigation: NavigationProps;
};
function CustomCarousel({
  showStepper = false,
  data,
  imagePrefix,
  navigation,
}: Props) {
  const width = Dimensions.get('window').width;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let count = 0;
  const [currentIndex, setIndex] = React.useState(0);
  const FlatlistRef = React.useRef<any | null>(null);
  const onViewRef = React.useRef((viewableItems: any) => {
    //console.log(viewableItems);
  });

  const nextPage = useCallback(() => {
    if (count >= data.length - 1) {
      count = 0;

      FlatlistRef.current?.scrollToIndex({
        index: count,
        animated: true,
      });
    } else {
      count++;

      FlatlistRef.current?.scrollToIndex({
        index: count,
        animated: true,
      });
    }
    setIndex(count);
  }, [count]);
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  useEffect(() => {
    const intervalId = setInterval(nextPage, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <View style={{ position: 'relative' }}>
      <Animated.FlatList
        data={data}
        ref={ref => {
          FlatlistRef.current = ref;
        }}
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
          let imageName = `${imagePrefix}${index}`;
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push(item);
              }}
              style={{
                width: width,
                height: 200,
              }}>
              <Animated.Image
                source={
                  getImage(imageName) //'https://i.hizliresim.com/1y8cjfc.png'
                }
                style={{
                  width: '100%',
                  height: '100%',
                  transform: [{ translateX }],
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      {showStepper && (
        <View
          style={{
            position: 'absolute',
            bottom: -25,
            right: 0,
            flexDirection: 'row',
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                borderWidth: index === currentIndex ? 1 : 0,
                borderColor:
                  index === currentIndex
                    ? theme.colors.getirPrimary500
                    : 'transparent',
                borderRadius: 20,
                width: 20,
                height: 20,
                marginHorizontal: 2,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderColor:
                    index === currentIndex
                      ? theme.colors.getirPrimary500
                      : 'transparent',
                  backgroundColor:
                    index === currentIndex
                      ? theme.colors.getirPrimary500
                      : theme.colors.gray,
                  borderRadius: 5,
                }}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default CustomCarousel;
