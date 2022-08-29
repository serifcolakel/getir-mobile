import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef } from 'react';

import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CustomCarousel from '../../components/CustomCarousel';
import { RootState, useAppDispatch, useAppSelector } from '../../store';

import { Loading } from '../../components/Loading';
import CustomText from '../../components/PartnerComponents/CustomText';
import { NavigationProps } from '../../Layout/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { getAllCategories } from '../../features/slices/categoriesSlice';
type Props = {
  navigation: NavigationProps;
  route: any;
};

const HEADER_HEIGHT = 200;
const AnimatedHeader = ({
  animatedValue,
  navigation,
}: {
  animatedValue: Animated.Value;
  navigation: NavigationProps;
}) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top],
    extrapolate: 'clamp',
  });
  const data = [
    'Route',
    'Route',
    'BottomTabs',
    'Addresses',
    'Home',
    'Home',
    'Home',
    'Home',
  ];
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: 'lightblue',
      }}>
      <CustomCarousel
        data={data}
        imagePrefix="routeSlider"
        showStepper={false}
        navigation={navigation}
      />
    </Animated.View>
  );
};
const Home = ({ navigation }: Props) => {
  const nav = useNavigation();
  const { categories, loading } = useAppSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <AnimatedHeader animatedValue={offset} navigation={navigation} />
          <FlatList
            data={categories}
            refreshing={loading}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  nav.navigate('Product');
                }}
                key={item.id}
                style={{
                  width: '25%',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri: item.picURL,
                  }}
                  style={{
                    borderRadius: 10,
                    width: 70,
                    height: 70,
                  }}
                />
                <CustomText
                  label={item.name}
                  style={{
                    fontSize: 10,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
            )}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={{
              paddingTop: HEADER_HEIGHT,
              paddingVertical: 20,
              paddingBottom: 50,
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false },
            )}
            style={{ flex: 1 }}
            keyExtractor={(_, idx) => idx.toString()}
          />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};

export default Home;
