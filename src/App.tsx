import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import { Provider } from 'react-redux';
import { enableLatestRenderer } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import { store } from './store';
import Navigator from './Layout/StackNavigator';
import { PermissionsAndroid, Platform } from 'react-native';
async function requestPermissions() {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization('whenInUse');
    // @ts-ignore
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    });
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}
// #5d3ebc, #ffd10d
const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide(); // hide static splash screen
    requestPermissions();

    enableLatestRenderer();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default codePush(App);
