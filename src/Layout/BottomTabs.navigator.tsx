import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.screen';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Detail from '../screens/Detail.screen';
import { Text, View } from 'react-native';
import { theme } from '../utils/theme';
import { HomeIcon, RightArrowIcon } from '../components/Icons';
export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route, navigation }) => ({
        animation: 'slide_from_right',
        animationDuration: 500,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.colors.purple,
        tabBarInactiveBackgroundColor: theme.colors.purple,
        tabBarIcon({ focused, color, size }) {
          switch (route.name) {
            case 'Home':
              return <HomeIcon size={size} color={color} />;
            case 'Detail':
              return <HomeIcon size={size} color={color} />;
            default:
              break;
          }
        },
        header: ({ navigation, options, route, layout }) => {
          let stepperWidth = '100%';
          switch (route.name) {
            case 'Home':
              stepperWidth = '75%';
              break;
            case 'Detail':
              stepperWidth = '50%';
              break;
            default:
              break;
          }

          return (
            <>
              <View
                style={{
                  backgroundColor: theme.colors.lightBlue,
                  height: 50,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <RightArrowIcon
                  onPress={() => navigation.canGoBack() && navigation.goBack()}
                  rotate={180}
                  size={20}
                  color="#fff"
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
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
        name="Detail"
        component={Detail}
        options={{
          title: 'Detail',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
