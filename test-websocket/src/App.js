import React, { useEffect } from 'react';
import './App.css';

import io from 'socket.io-client';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './components/ListItem';

function App() {
  const socket = io('https://abf2e432.ngrok.io/');

  useEffect(() => {

    socket.on('connect', () => {
      console.log(socket.connected); // true
      socket.emit('hello', 'world');
    });
    
    socket.on('world', event => {
      console.log(event)
    });

    socket.on('my response', event => {
      console.log(event)
    });

    return () => { socket.close() };
  }, [])

  const data = [
    {
      id: 1,
      firstName: 'Test',
      lastName: 'Testing',
      checked: false
    },
    {
      id: 2,
      firstName: 'Test2',
      lastName: 'Testing2',
      checked: false
    }
  ]

    const handleClick = () => {
      socket.emit("testing", "test")
      console.log('succuss')
  }

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
          </tr>
        </thead>
        {data.map(item => {
          return <ListItem key={item.id} data={item} handleWS={handleClick}/>
        })}
      </Table>
    </div>
  );
}

export default App;
