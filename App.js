import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './pages/HomePage/Home';
import {StackNavigator} from './Router/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
