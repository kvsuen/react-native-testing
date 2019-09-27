import React from 'react';

import AppContainer from './src/navigations/AppNavigation'

// in React native, the component exported from App.js is the entry point (root component) for the app
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}