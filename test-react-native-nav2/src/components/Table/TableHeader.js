import React from 'react';
import { Text, View } from 'react-native';

import { TableStyles } from '../../styles/TableStyles';

const TableHeader = () => {
  return ( 
    <View style={TableStyles.container}>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>Qty Remaining</Text>
      </View>
      <View style={{...TableStyles.column, flex: 3}}>
        <Text style={TableStyles.text}>Item Name</Text>
      </View>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>People Shared With</Text>
      </View>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>Price per Person</Text>
      </View>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>Placeholder</Text>
      </View>
    </View>
  );
}
 
export default TableHeader;