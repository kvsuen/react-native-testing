import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FirstPage from '../screens/FirstPage'
import SecondPage from '../screens/SecondPage'

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// this is a React component, automatically provides a nav header
const AppNavigator = createMaterialTopTabNavigator(
  // route configuration object
  {
    // two routes, Home and Details
    // Home route corresponds to FirstPage 'screen' component

    // each screen component rendered as a route by React Navigation is automatically given a navigation prop
    Home: FirstPage,
    Details: SecondPage,
  },
  // options object
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

// this is a React component, can be directly exported from App.js to be used as the root component
// this puts AppNavigator inside a container
// allows managing of app state (nav states) and links the top-level navigator to the app environement 
// react magic
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer