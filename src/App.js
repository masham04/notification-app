import React from 'react';
import {notificationinit} from './service';
import './App.css';


function App() {
  return (
    <div className="App">
          <h1>Hello World</h1>
          <button onClick={notificationinit}>Click Here</button>
          <button className='btn btn-success'>Submit</button>
    </div>
  );
}

export default App;
