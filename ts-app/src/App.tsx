import React from 'react';
import './styles/App.css';
import Login from './components/Login';


function App() {
  return (
    <div id="App">
      <Login></Login>

      <footer className='footer'>
        <p><a href='https://brownccb.org/2025-events' target='_blank' style={{textDecoration:'none', color:'white'}}>♥ Brown University Class Coordinating Board 2025</a> | Made by Kelly Wei'25</p>
      </footer>
    </div>
  );
}

export default App;
