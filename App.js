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
import CameraScreen from './screens/CameraScreen';
import AdminScreen from './screens/AdminScreen';
import IssuesScreen from './screens/IssuesScreen'
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
    card: '#d9dadc',
    text: '#344055',
    fontSize: 50,
    border: '#766e87',
    notification: 'red',
  }
}

export default function App() {

  LogBox.ignoreAllLogs();

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
              options={{ 
                title: 'Welcome',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
              />
            <Stack.Screen 
              name="Req Items" 
              component={HomeScreen} 
              options={{
                title: 'Item List',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="Req List" component={ReqItemsScreen} options={{
                title: 'Your Requests',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="Issues Screen" component={IssuesScreen} options={{
                title: 'Open Issues',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="All Requests" component={RequestedItemsScreen} options={{
                title: 'All Requests',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="Option Screen" component={OptionScreen} options={{
                title: 'Options',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="Camera Screen" component={CameraScreen} options={{
                title: 'Snap Shot',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen name="Admin Screen" component={AdminScreen} options={{
                title: 'Administrator',
                headerBackTitleVisible: false,
                headerTitleStyle: {
                  fontFamily: 'ContrailOne',
                  fontWeight: 'bold'
                }
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

