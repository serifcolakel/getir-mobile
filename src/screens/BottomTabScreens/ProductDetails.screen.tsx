import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView as HtmlRenderer } from 'react-native-webview';

import React, { useCallback, useEffect } from 'react';
import { RootState, useAppSelector } from '../../store';
import CustomText from '../../components/PartnerComponents/CustomText';
import { theme } from '../../utils/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {};

const ProductDetails = (props: Props) => {
  const { selectedProduct } = useAppSelector(
    (state: RootState) => state.allProducts,
  );
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onViewRef = React.useRef((viewableItems: any) => {
    //console.log(viewableItems);
  });
  let count = 0;
  const [currentIndex, setIndex] = React.useState(0);
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  const width = Dimensions.get('window').width;
  const FlatlistRef = React.useRef<any | null>(null);
  let length = selectedProduct?.picURLs.length;

  useEffect(() => {
    count = 0;
    if (length) {
      const intervalId = setInterval(nextPage, 500);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [selectedProduct?.picURLs.length]);

  const nextPage = useCallback(() => {
    if (length) {
      if (count >= length - 1) {
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
    }

    setIndex(count);
  }, [count, selectedProduct?.picURLs.length]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      {selectedProduct ? (
        selectedProduct?.picURLs.length > 1 ? (
          <Animated.FlatList
            data={selectedProduct?.picURLs}
            ref={ref => {
              FlatlistRef.current = ref;
            }}
            horizontal
            pagingEnabled
            viewabilityConfig={viewConfigRef.current}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            onViewableItemsChanged={onViewRef.current}
            onScrollEndDrag={nextPage}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
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
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: width,
                    height: 400,
                  }}>
                  <Animated.Image
                    source={{
                      uri: item,
                    }}
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
        ) : (
          <Image
            source={{
              uri: selectedProduct?.picURLs[0],
            }}
            style={{
              width: '100%',
              height: 400,
              marginBottom: 20,
              resizeMode: 'cover',
            }}
          />
        )
      ) : null}

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: '45%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        {selectedProduct?.picURLs.map((item, index) => (
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 160,
        }}>
        <CustomText
          style={{ fontSize: 20, color: theme.colors.getirPrimary500 }}
          label={selectedProduct?.priceText}
        />
        <CustomText
          style={{
            fontSize: 16,
            paddingVertical: 10,
            color: theme.colors.black,
          }}
          label={selectedProduct?.name}
        />
        <CustomText
          style={{ fontSize: 12, color: theme.colors.gray }}
          label={selectedProduct?.shortDescription}
        />
      </View>

      {/* <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 80,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderTopWidth: 0.5,
          borderBottomColor: theme.colors.gray2,
          borderBottomWidth: 0.5,
          borderTopColor: theme.colors.gray,
          backgroundColor: theme.colors.white,
        }}>
        <Pressable
          onPress={() => {
            if (selectedProduct) dispatch(deleteToBasket(selectedProduct));
            // navigation.navigate('Product');
          }}>
          <CustomText
            style={{
              paddingVertical: 10,
              width: Dimensions.get('window').width / 2.5,
              color: theme.colors.white,
              marginHorizontal: 20,
              textAlign: 'center',
              borderRadius: 8,
              backgroundColor: theme.colors.getirSecondary500,
              fontSize: 16,
            }}
            label="Sepetten Çıkar"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            if (selectedProduct) dispatch(addToBasket(selectedProduct));
            // navigation.navigate('Product');
          }}>
          <CustomText
            style={{
              paddingVertical: 10,
              width: Dimensions.get('window').width / 2.5,
              color: theme.colors.white,
              textAlign: 'center',
              marginHorizontal: 20,
              borderRadius: 8,
              backgroundColor: theme.colors.getirPrimary500,
              fontSize: 16,
            }}
            label="Sepete Ekle"
          />
        </Pressable>
      </View> */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
