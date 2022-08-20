import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Search from '../screens/Search.screen';
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
import Profile from '../screens/Profile.screen';
import Campaign from '../screens/Campaing.screen';
import Route from '../screens/Route.screen';
export type RootBottomStackParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Campaign: undefined;
  Route: undefined;
};
export type BottomNavigationProps =
  NativeStackNavigationProp<RootBottomStackParamList>;
const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        animation: 'slide_from_right',
        animationDuration: 1000,
        tabBarActiveTintColor: theme.colors.getirPrimary500,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.colors.white,
        tabBarInactiveBackgroundColor: theme.colors.white,
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
          console.log('RouteName', route.name);
          let stepperWidth = '100%';
          switch (route.name) {
            case 'Home':
              stepperWidth = '75%';
              break;
            case 'Search':
              stepperWidth = '50%';
              break;
            default:
              break;
          }

          return (
            <>
              <View
                style={{
                  backgroundColor: theme.colors.getirPrimary500,
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: navigation.canGoBack()
                    ? 'space-between'
                    : 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                {navigation.canGoBack() && (
                  <RightArrowIcon
                    onPress={() =>
                      navigation.canGoBack() && navigation.goBack()
                    }
                    rotate={180}
                    size={20}
                    color="#fff"
                  />
                )}
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto-Bold',
                  }}>
                  {options.title as string}
                </Text>

                <View />
              </View>
              <View
                style={{
                  height: 5,
                  width: stepperWidth,
                  backgroundColor: theme.colors.deepPurple,
                }}
              />
            </>
          );
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
        }}
      />
      <BottomTabs.Screen
        name="Route"
        component={Route}
        options={{
          title: 'Route',
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profil',
        }}
      />
      <BottomTabs.Screen
        name="Campaign"
        component={Campaign}
        options={{
          title: 'Campaign',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
