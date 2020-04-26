import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ColorList from '../components/ColorList';
import ColorInfo from '../components/ColorInfo';
import WebPage from '../components/WebPage';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={ColorList}
          options={{title: 'Available Colors'}}
        />
        <Stack.Screen
          name="Detail"
          component={ColorInfo}
          options={({route}) => ({
            title: route.params.item,
          })}
        />
        <Stack.Screen
          name="Web"
          component={WebPage}
          options={{title: 'All Colors'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
