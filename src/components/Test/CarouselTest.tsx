import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import { theme } from '../../utils/theme';
import CarouselItem from '../CarouselItem';

const heigth = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Carousel = ({ data }: { data: any[] }) => {
  const scrollX = new Animated.Value(0);
  const Flatlist = useRef(null);
  let position = Animated.divide(scrollX, width);
  //const [dataList, setDataList] = useState(data);

  // useEffect(() => {
  //   setDataList(data);
  //   // infiniteScroll(dataList);
  // }, []);

  if (data && data.length) {
    return (
      <View
        style={{
          position: 'relative',
        }}>
        <FlatList
          data={data}
          //ref={ref => (Flatlist.current = ref)}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: theme.colors.getirPrimary500,
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});

export default Carousel;
