import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen';
import ReqItemsScreen from './screens/ReqItemsScreen';


const Stack = createStackNavigator();

export default function App() {

  const store = createStore(reducers)
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
            options={{ title: 'Sign In'}}
          />
          <Stack.Screen name="Req Items" component={HomeScreen}
          />
          <Stack.Screen name="Req List" component={ReqItemsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     width: '100%'
//   },
//   header: {
//     color: 'red',
//     paddingTop: 4,
//     fontSize: 16,
//     fontWeight: '700',
//     textAlign: 'center'
//   }
// });
