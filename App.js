import React, { useState } from 'react';
import { LogBox } from 'react-native'
import * as Font from 'expo-font'
import  AppLoading from 'expo-app-loading'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen';
import ReqItemsScreen from './screens/ReqItemsScreen';
import RequestedItemsScreen from './screens/RequestedItemsScreen';
import OptionScreen from './screens/OptionScreen';
// import { FontDisplay } from 'expo-font';

const fetchFont = () => {
  return Font.loadAsync({
    'ContrailOne': require('./assets/fonts/ContrailOne-Regular.ttf')
  });
};

const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: '#595959',
    background: '#7f7f7f',
    card: '#e0e0e0',
    text: '#595959',
    fontSize: 20,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
}

export default function App() {
  // LogBox.ignoreAllLogs();
  const [fontLoaded, setfontLoaded] = useState(false);


  if(!fontLoaded) {
    return ( 
      <AppLoading 
        startAsync={fetchFont}
        onError={() => console.log("ERROR")}
        onFinish={() => {
          setfontLoaded(true)
        }}
      />
    );
  }
        

  const store = createStore(reducers)
  
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
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

