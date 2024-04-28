

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LandingPage from './pages/LandingPage'
import WorkOut from './pages/WorkOut'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {RootParamList} from './pages/RouteTypes'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { create } from 'react-test-renderer';
import RegisterPage from './pages/RegisterPage';




const rootStack = createNativeStackNavigator<RootParamList>();


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <rootStack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <rootStack.Group>
          <rootStack.Screen
            name="Login"
            component={LoginPage}/>
          <rootStack.Screen
            name='Register'
            component={RegisterPage} />
        </rootStack.Group>
        <rootStack.Group>
          <rootStack.Screen
            name="Landing"
            component={LandingPage}/>
          <rootStack.Screen name="WorkOut" component={WorkOut}/>
          <rootStack.Screen name="Home" component={HomePage}/>
        </rootStack.Group>
      </rootStack.Navigator>
    </NavigationContainer>
    // //<RootNavigator></RootNavigator>
    // <AuthNavigator></AuthNavigator>
    
  );
}


const styles = StyleSheet.create({
  landingPage: {
    height: '100%',
    width: '100%'
  }
});

export default App;
