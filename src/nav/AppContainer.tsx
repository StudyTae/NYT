import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import SearchIndex from '@pages/tabs/search';
import ClipsIndex from '@pages/tabs/clips';
import WebViewIndex from '@pages/webview';

const CoverModal = createStackNavigator();

const Tab = createBottomTabNavigator();

const tabBarOptions : BottomTabBarOptions = {
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
  keyboardHidesTabBar: true,
}

const modalOptions : StackNavigationOptions = { headerShown: false }

const TabNav = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === '검색') {
          iconName = focused
            ? require('/img/search-on.png')
            : require('/img/search-off.png');
        } else if (route.name === '클립한 뉴스') {
          iconName = focused
            ? require('/img/clip-on.png')
            : require('/img/clip-off.png');
        }
        return <Image source={iconName} style={{ width: 25, height: 25 }} />;
      },
    })}
    tabBarOptions={tabBarOptions}
  >
    <Tab.Screen name="검색" component={SearchIndex} />
    <Tab.Screen name="클립한 뉴스" component={ClipsIndex} />
  </Tab.Navigator>
);

const AppContainer = () => {
  return (
    <NavigationContainer>
      <CoverModal.Navigator mode="modal" screenOptions={modalOptions}>
        <CoverModal.Screen name="Tabs" component={TabNav} />
        <CoverModal.Screen name="Webview" component={WebViewIndex} />
      </CoverModal.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
