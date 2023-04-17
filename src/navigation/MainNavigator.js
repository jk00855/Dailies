import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategorySelection from '../screens/CategorySelection';
import QuestSelection from '../screens/QuestSelection';
import QuestCompletion from '../screens/QuestCompletion';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategorySelection">
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="QuestSelection" component={QuestSelection} />
        <Stack.Screen name="QuestCompletion" component={QuestCompletion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
