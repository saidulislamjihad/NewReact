import { useState } from 'react'
import React from 'react';
import './Clock.css';

function Clock() {
    let time = new Date().toLocaleTimeString();
    const [ currenttime , setCurrentTime ] = useState(time);
  
    const updateTime = () =>{
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time); 
    }  
    setInterval( updateTime , 1000 );
  
    return (
      <>
        <h1>Hello {currenttime}</h1>
      </>
    )
  }
  
  export default Clock;