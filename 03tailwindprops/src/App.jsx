import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    username:"book1",
    price:"$20",

  }

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded mb-4'>Tailwind Css</h1>
      <Card  name="Jeet Yadav" Obj1 = {myObj}/>
      <Card name="Heer Yadav"/>
    </>
  )
}

export default App
