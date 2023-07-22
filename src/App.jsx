import { useState } from 'react'
import React from 'react';
import './App.css';

function App() {
  const user = {
    name: 'Saidul Islam',
    age: '20',
    img: '../public/vite.svg',
    position: 'React',
    date: new Date().toLocaleDateString()
  };
  

  return (
    <>
      <h1>My name is {user.name}</h1>
      <h2>I am a {user.position} Developer</h2>
      <h3>I am {user.age} Years Old</h3>
      <img src={user.img} className='avater' alt={ 'Photo of ' + user.name } />
      <h1>Hello {user.date}</h1>
    </>
  )
}

export default App
