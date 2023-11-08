import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img className='logo' src='https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png'></img>
      <p className='title'>Let's explore others' Github</p>
    </>
  )
}

export default App
