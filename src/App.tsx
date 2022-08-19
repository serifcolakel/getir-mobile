import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './Layout/BottomTabs.navigator';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import { Provider } from 'react-redux';
import { RootState, store, useAppDispatch, useAppSelector } from './store';
import { getAllProduct } from './features/slices/product';
// #5d3ebc, #ffd10d
const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide(); // hide static splash screen
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default codePush(App);
