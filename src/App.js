import React from 'react'
import logo from './logo.svg'
import './App.css'
import TestHook from './components/TestHook'
import TestApi from './components/TestApi'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestHook />
        <TestApi />
      </header>
    </div>
  )
}
