import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/home-page/Home';
import Search from '../pages/search-page/Search';
import Card from '../pages/card-list-page/Card';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};

export {StackNavigator};
