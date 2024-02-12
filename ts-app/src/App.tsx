import React from 'react';
import './styles/App.css';
import Login from './components/Login';
import ccbLogo from "./logos/site_icon.png"

function App() {
  function refreshPage(){
    window.location.reload();
  }

  return (
    <div id="App">
      <header>
        <img src={ccbLogo} style={{width:'4vw', float:'left'}} onClick={() => refreshPage()}></img>
        <h4 style={{color:"white"}} onClick={() => refreshPage()}>Class Coordinating Board Valentine's Day Goody Grams 2024</h4>
      </header>

      <Login></Login>

      <footer className='footer'>
        <p><a href='https://brownccb.org/2025-events' target='_blank' style={{textDecoration:'none', color:'white'}}>♥ Brown University Class Coordinating Board 2025</a> | Made by Kelly Wei'25</p>
      </footer>
    </div>
  );
}

export default App;
