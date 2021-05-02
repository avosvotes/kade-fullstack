import React, { useState } from 'react'

const Login = ({ onSubmit }) => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit({ login, password })
      }}
    >
      <input onChange={event => setLogin(event.target.value)} />
      <input
        type="password"
        onChange={event => setPassword(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default Login
