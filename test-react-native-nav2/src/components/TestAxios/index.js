import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';

const TestAxios = ({data}) => {
  return (
    <ScrollView>
      <Text>{data[0].name}</Text>
    </ScrollView>
  );
}
 
export default TestAxios;