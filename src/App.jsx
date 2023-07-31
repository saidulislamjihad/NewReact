import { useState } from 'react'
import React from 'react';
import './App.css';
import Clock from './components/Clock.jsx'
import ClockList from './components/ClockList.jsx'
import Form from './components/Form';

function App() {
  const quantities = [1,2,3];
  return (
    <>
      <Clock/>
      <Form/>
    </>
  )
}

export default App;
