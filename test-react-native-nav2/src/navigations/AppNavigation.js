import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'

// this is a React component, automatically provides a nav header
const AppNavigator = createStackNavigator(
  // route configuration object
  {
    // two routes, Home and Details
    // Home route corresponds to HomeScreen 'screen' component

    // each screen component rendered as a route by React Navigation is automatically given a navigation prop
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  // options object
  {
    initialRouteName: 'Home',
  }
);

// this is a React component, can be directly exported from App.js to be used as the root component
// this puts AppNavigator inside a container
// allows managing of app state (nav states) and links the top-level navigator to the app environement 
// react magic
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer