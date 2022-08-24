import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/BottomTabScreens/Home.screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Search from '../screens/BottomTabScreens/Search.screen';
import { Text, View } from 'react-native';
import { theme } from '../utils/theme';
import {
  GiftIcon,
  HomeIcon,
  LayoutIcon,
  RightArrowIcon,
  SearchIcon,
  UserIcon,
} from '../components/Icons';
import Profile from '../screens/BottomTabScreens/Profile.screen';
import Campaign from '../screens/BottomTabScreens/Campaing.screen';
import Route from '../screens/Route.screen';
import CustomText from '../components/PartnerComponents/CustomText';
import Col from '../components/Col';
import Row from '../components/Row';
import Product from '../screens/BottomTabScreens/Product.screen';
export type RootBottomStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Campaign: undefined;
  Route: undefined;
  Product: undefined;
};
export type BottomNavigationProps =
  NativeStackNavigationProp<RootBottomStackParamList>;
const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        animationDuration: 100,
        tabBarActiveTintColor: theme.colors.getirPrimary500,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.colors.white,
        tabBarInactiveBackgroundColor: theme.colors.white,
        tabBarIconStyle: {
          display: route.name === 'Product' ? 'none' : 'flex',
        },
        tabBarItemStyle: {
          display: route.name === 'Product' ? 'none' : 'flex',
        },
        tabBarStyle: {
          height: 60,
          display:
            route.name === 'Route' ||
            route.name === 'Addresses' ||
            route.name === 'NewAddresses'
              ? 'none'
              : 'flex',
        },
        tabBarIcon({ focused, color, size }) {
          switch (route.name) {
            case 'Home':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <HomeIcon
                    onPress={() => {
                      navigation.navigate('Home');
                    }}
                    size={30}
                    color={color}
                  />
                  <View
                    style={{
                      height: 6,
                      width: 65,
                      marginTop: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      backgroundColor: focused
                        ? theme.colors.getirPrimary500
                        : theme.colors.white,
                    }}
                  />
                </View>
              );

            case 'Search':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SearchIcon
                    onPress={() => {
                      navigation.navigate('Search');
                    }}
                    size={30}
                    color={color}
                  />
                  <View
                    style={{
                      height: 6,
                      width: 65,
                      marginTop: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      backgroundColor: focused
                        ? theme.colors.getirPrimary500
                        : theme.colors.white,
                    }}
                  />
                </View>
              );
            case 'Route':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 4,
                    borderColor: 'white',
                    borderRadius: 50,
                    width: 80,
                    backgroundColor: theme.colors.getirPrimary600,
                    marginBottom: 50,
                    height: 80,
                  }}>
                  <LayoutIcon
                    onPress={() => {
                      navigation.navigate('Route');
                    }}
                    size={35}
                    color={theme.colors.getirSecondary500}
                  />
                </View>
              );
            case 'Profile':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <UserIcon
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}
                    size={25}
                    color={color}
                  />
                  <View
                    style={{
                      height: 6,
                      width: 65,
                      marginTop: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      backgroundColor: focused
                        ? theme.colors.getirPrimary500
                        : theme.colors.white,
                    }}
                  />
                </View>
              );
            case 'Campaign':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GiftIcon
                    onPress={() => {
                      navigation.navigate('Campaign');
                    }}
                    size={30}
                    color={color}
                  />
                  <View
                    style={{
                      height: 6,
                      width: 65,
                      marginTop: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      backgroundColor: focused
                        ? theme.colors.getirPrimary500
                        : theme.colors.white,
                    }}
                  />
                </View>
              );
            default:
              break;
          }
        },
        header: ({ navigation, options, route, layout }) => {
          return (
            <>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: theme.colors.getirPrimary500,
                }}>
                <CustomText
                  label={options.title?.split(' ')[0]}
                  style={{
                    color: theme.colors.getirSecondary500,
                    fontSize: 20,
                  }}
                />
              </View>
              {options.title?.includes('false') && (
                <Row
                  extraStyle={{
                    backgroundColor: theme.colors.getirSecondary500,
                    height: 50,

                    width: '100%',
                    left: 0,
                    zIndex: 1,
                  }}
                  alignItems="center"
                  justifyContent="space-between">
                  <Row
                    extraStyle={{
                      backgroundColor: theme.colors.white,
                      paddingHorizontal: 20,
                      width: '70%',
                      elevation: 25,
                      borderTopRightRadius: 80,
                      borderBottomRightRadius: 80,
                      height: '100%',
                    }}
                    onPress={() => navigation.navigate('Addresses')}
                    alignItems="center"
                    justifyContent="space-between">
                    <CustomText label="Teslimat Adresi Belirleyin" />
                    <RightArrowIcon
                      size={18}
                      color={theme.colors.getirPrimary500}
                    />
                  </Row>

                  <Col cols={1}>
                    <CustomText
                      style={{
                        width: '100%',
                        textAlign: 'center',

                        fontSize: 12,
                        color: theme.colors.getirPrimary500,
                      }}
                      label="TVS"
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}>
                      <CustomText
                        style={{
                          textAlign: 'center',
                          fontFamily: theme.fonts.bold,
                          fontSize: 24,
                          color: theme.colors.getirPrimary500,
                        }}
                        label="10"
                      />
                      <CustomText
                        style={{
                          fontSize: 15,
                          paddingBottom: 2,
                          fontFamily: theme.fonts.bold,
                          textAlign: 'center',
                          color: theme.colors.getirPrimary500,
                        }}
                        label="dk"
                      />
                    </View>
                  </Col>
                </Row>
              )}
            </>
          );
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'getir Row:false',
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Ara Row:true',
        }}
      />
      <BottomTabs.Screen
        name="Route"
        component={Route}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profil Row:true',
        }}
      />
      <BottomTabs.Screen
        name="Campaign"
        component={Campaign}
        options={{
          title: 'Kampanyalar Row:true',
        }}
      />
      <BottomTabs.Screen
        name="Product"
        component={Product}
        options={{
          title: 'Ürünler Row:true',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
