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
import rootReducer from '@data/reducer';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ThunkMiddleware));
const persistor = persistStore(store);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
