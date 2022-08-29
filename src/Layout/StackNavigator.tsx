import React, { useEffect } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { theme } from '../utils/theme';
import { RightArrowIcon } from '../components/Icons';
import BottomTabsNavigator from './BottomTabs.navigator';
import Route from '../screens/Route.screen';
import Addresses from '../screens/Addresses.screen';
import NewAddresses from '../screens/NewAddresses.screen';
import SelectAdress from '../screens/SelectAdress.screen';
import { Location } from '../features/slices/locationSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { getAllCampaings } from '../features/slices/campaingsSlice';
import { getAllCategories } from '../features/slices/categoriesSlice';
import { useAxios } from '../hooks/useAxios';
import { Campaings } from '../types/CampaingsTypes';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Route: undefined;
  BottomTabs: undefined;
  Addresses: undefined;
  NewAddresses: {
    type: Location['type'];
  };
  SelectAdress: {
    type: Location['type'];
  };
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Campaign: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Navigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'slide_from_right',
          animationDuration: 500,
          statusBarColor: theme.colors.getirPrimary600,
          contentStyle: {
            backgroundColor: theme.colors.gray2,
            //backgroundColor: theme.colors.red,
          },
          header: ({ navigation, options, route, back }) => {
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
        }}>
        <Stack.Screen
          name="Route"
          component={Route}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigator}
          options={{
            headerTitle: 'Bireysel Emeklilik Başvurusu',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{
            title: 'Adreslerim',
          }}
        />
        <Stack.Screen
          name="NewAddresses"
          component={NewAddresses}
          options={{
            title: 'Yeni Adres Ekle',
          }}
        />
        <Stack.Screen
          name="SelectAdress"
          component={SelectAdress}
          options={{
            title: 'Adres Seç',
          }}
        />
      </Stack.Navigator>
    </>
  );
}
