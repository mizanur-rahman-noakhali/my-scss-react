import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count} setCount={setCount}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
