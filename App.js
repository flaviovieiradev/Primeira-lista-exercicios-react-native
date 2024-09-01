import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import Ex01Screen from './components/Ex01Screen';
import Ex02Screen from './components/Ex02Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}>
        </Stack.Screen>
        <Stack.Screen name="Ex01" component={Ex01Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex02" component={Ex02Screen}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;