import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {MainScreen, SecondScreen} from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={styles.container}>
  <NavigationContainer>
    {/*<Stack.Navigator initialRouteName="Details">
      тут начальный роут будет отображаться там
    */}

    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
