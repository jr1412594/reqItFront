import React from 'react';
import { LogBox } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen';
import ReqItemsScreen from './screens/ReqItemsScreen';
import RequestedItemsScreen from './screens/RequestedItemsScreen';
import OptionScreen from './screens/OptionScreen';

const Stack = createStackNavigator();

export default function App() {
  // LogBox.ignoreAllLogs();

  const store = createStore(reducers)
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="SignIn" 
              component={SignInScreen} 
              options={{ title: 'Req It'}}
              />
            <Stack.Screen name="Req Items" component={HomeScreen}
            />
            <Stack.Screen name="Req List" component={ReqItemsScreen}
            />
            <Stack.Screen name="All Requests" component={RequestedItemsScreen}
            />
            <Stack.Screen name="Option Screen" component={OptionScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

