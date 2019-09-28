import React, { useState } from 'react';

const ListItem = ({ data, handleWS }) => {

  const [listData, setListData] = useState(
    {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      checked: data.checked
    }
  )

  const handleClick = () => {
    if (listData.checked) {
      setListData({...listData, checked: false})
      handleWS()
    } else {
      setListData({...listData, checked: true})
      handleWS()
    }
  }

  return (
    <tbody>
      <tr>
        <td>{listData.id}</td>
        <td>{listData.firstName}</td>
        <td>{listData.lastName}</td>
        <td>
          <input type="checkbox" name="true" checked={listData.checked} onChange={handleClick} />
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
