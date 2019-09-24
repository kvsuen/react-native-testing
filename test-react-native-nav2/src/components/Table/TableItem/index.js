import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { TableStyles } from '../../../styles/TableStyles';

const TableItem = ({ data }) => {
  const [sharedBy, setSharedBy] = React.useState(data.sharedByNum);
  const [pricePerPerson, setPricePerPerson] = React.useState(data.pricePerPerson);

  return ( 
    <View style={TableStyles.container}>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>{data.quantity}</Text>
      </View>
      <View style={{...TableStyles.column, flex: 3}}>
        <Text style={TableStyles.text}>{data.itemName}</Text>
      </View>
      <View style={TableStyles.column}>
        <TextInput
          style={{ height: 40, width: 40, borderColor: 'gray', borderWidth: 1, color: 'white' }}
          onChangeText={val => setSharedBy(val)}
          onEndEditing={event => setPricePerPerson(data.pricePerPerson / parseInt(event.nativeEvent.text))}
          // value expects string
          value={String(sharedBy)}
          keyboardType='numeric'
        />
      </View>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>${pricePerPerson.toFixed(2)}</Text>
      </View>
      <View style={TableStyles.column}>
        <Text style={TableStyles.text}>Temp</Text>
      </View>
    </View>
  );
}
 
export default TableItem;