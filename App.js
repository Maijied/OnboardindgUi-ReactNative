import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './Screens/OnbordingScreen';
import LoginScreen from './Screens/LoginScreen';

import { StyleSheet, Text, View } from 'react-native';

const AppStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator
        headerMode= "none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;