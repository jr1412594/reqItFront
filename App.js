import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { StyleSheet, Text, View } from 'react-native';
import ItemContainer from './components/ItemContainer'


export default function App() {

  const store = createStore(reducers)
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.header}>What items would you like to request?</Text>
        <ItemContainer />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  header: {
    color: 'red',
    paddingTop: 4,
    fontSize: 'bold',
    fontWeight: 700,
  }
});
