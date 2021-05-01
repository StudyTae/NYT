/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from '@nav/AppContainer';
import { applyMiddleware, createStore } from 'redux';
import data from '@data/reducer';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';

const store = createStore(data, applyMiddleware(ThunkMiddleware));

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
