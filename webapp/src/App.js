import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchText } from './services/HelloWorld'

const App = () => {
  const [text, setText] = useState('loading...')
  useEffect(() => {
    fetchText().then(setText)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  )
}

export default App
