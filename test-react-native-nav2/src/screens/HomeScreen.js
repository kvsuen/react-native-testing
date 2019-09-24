import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        // navigate goes to the route (also pushes route if doesnt exist in stack nav)
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen