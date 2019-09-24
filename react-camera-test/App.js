import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CameraExample from './CameraExample'

export default function App() {

  return (
    <View style={styles.container}>
      <CameraExample />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
