import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import Axios from 'axios';

import Table from '../components/Table/';
import TestAxios from '../components/TestAxios/';

const data = [
  {
    id: 1,
    quantity: 2,
    itemName: 'Spaghetti',
    pricePerPerson: 10,
    sharedByNum: 2,
    takenBy: 0,
    complete: false
  },
  {
    id: 2,
    quantity: 1,
    itemName: 'Sparkling Water',
    pricePerPerson: 2,
    sharedByNum: 1,
    takenBy: 1,
    complete: true
  }
];

const DetailsScreen = ({ navigation }) => {
  const [state, setState] = useState([
    {
      id: 1,
      name: 'Monday',
      appointments: [1, 2, 3, 4, 5],
      interviewers: [2, 3, 4, 7, 10],
      spots: 4
    },
  ]);

  useEffect(() => {
    Axios.get('https://scheduler-api-server.herokuapp.com/api/days').then(
      resp => {
        console.log(resp.data);
        setState(resp.data);
      }
    );
  }, []);

  /* 2. Get the param, provide a fallback value if not available */
  const itemId = navigation.getParam('itemId', 'NO-ID');
  const otherParam = navigation.getParam('otherParam', 'some default value');

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Navigate to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Push (to stack) to Details... again"
        // adds new route to navigation stack
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home  "
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back  " onPress={() => navigation.goBack()} />
      <Table data={data} />
      <TestAxios data={state} />
    </ScrollView>
  );
};

DetailsScreen.navigationOptions = {
  title: 'Details'
};

export default DetailsScreen;
