import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import TableHeader from './TableHeader';
import TableItem from './TableItem/';

const Table = (props) => {
  return (
    <ScrollView>
      <TableHeader />
      <FlatList
        data={props.data}
        renderItem={({ item }) => <TableItem data={item} />}
        // keyExtractor expects string
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
}
 
export default Table;