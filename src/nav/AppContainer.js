import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import SearchIndex from '@pages/tabs/search';
import ClipsIndex from '@pages/tabs/clips';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '검색') {
              iconName = focused
                ? require('/img/search-on.png')
                : require('/img/search-off.png');
            } else if (route.name === '클립') {
              iconName = focused
                ? require('/img/clip-on.png')
                : require('/img/clip-off.png');
            }

            // You can return any component that you like here!
            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="검색" component={SearchIndex} />
        <Tab.Screen name="클립" component={ClipsIndex} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
