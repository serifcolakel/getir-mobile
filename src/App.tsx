import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './Layout/BottomTabs.navigator';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
// #5d3ebc, #ffd10d
const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide(); // hide static splash screen
  }, []);
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default codePush(App);
