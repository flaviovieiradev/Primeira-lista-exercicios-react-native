import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import Ex01Screen from './components/Ex01Screen';
import Ex02Screen from './components/Ex02Screen';
import Ex03Screen from './components/Ex03Screen';
import Ex04Screen from './components/Ex04Screen';
import Ex05Screen from './components/Ex05Screen';
import Ex06Screen from './components/Ex06Screen';
import Ex07Screen from './components/Ex07Screen';
import Ex08Screen from './components/Ex08Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home - Primeira Lista" component={HomeScreen}>
        </Stack.Screen>
        <Stack.Screen name="Ex01" component={Ex01Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex02" component={Ex02Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex03" component={Ex03Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex04" component={Ex04Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex05" component={Ex05Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex06" component={Ex06Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex07" component={Ex07Screen}>
        </Stack.Screen>
        <Stack.Screen name="Ex08" component={Ex08Screen}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;