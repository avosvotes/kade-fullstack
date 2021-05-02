import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchText } from './services/HelloWorld'
import { login } from './services/Auth'
import Login from './views/Login'

const App = () => {
  const [text, setText] = useState('loading...')
  const [token, setToken] = useState()

  useEffect(
    () => {
      fetchText(token).then(setText)
    },
    [token]
  )

  const authenticate = () =>
    login().then(res => {
      console.log(res)
      setToken(res)
    })

  return (
    <div className="App">
      {!token && <Login onSubmit={() => authenticate()} />}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
      </header>
    </div>
  )
}

export default App
