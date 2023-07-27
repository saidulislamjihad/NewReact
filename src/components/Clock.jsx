import { useState } from 'react'
import React from 'react';

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
        <h1>Function Base React Watch {currenttime}</h1>
      </>
    )
  }
  
  export default Clock;