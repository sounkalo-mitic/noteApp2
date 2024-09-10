import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteDetailScreen from '../screens/NoteDetailScreen';
import NoteFormScreen from '../screens/NoteFormScreen';
import HomeScreen from '../screens/HomeScreens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Notes' }} />
        <Stack.Screen name="NoteDetail" component={NoteDetailScreen} options={{ title: 'Détails de la note' }} />
        <Stack.Screen name="NoteForm" component={NoteFormScreen} options={{ title: 'Ajouter/Modifier une note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
