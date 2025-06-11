import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to BookLover Main App</h1>
      <p>If you want to login, go to <a href="/login">/login</a></p>
    </>
  )
}

export default App
