import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clock from './clock.jsx'
import SecondClock from './ClassBase.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SecondClock/>
  </React.StrictMode>
)
