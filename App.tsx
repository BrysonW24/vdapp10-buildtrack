import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { theme } from './src/theme';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <StatusBar style="auto" />
          <RootNavigator />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
