import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage/Home';
import Search from '../pages/SearchPage/Search';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export {StackNavigator};
