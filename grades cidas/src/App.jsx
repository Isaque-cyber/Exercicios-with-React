import { useState } from 'react'
import './App.css'
import Demo from './components/Demo'
import GradesCida from './components/GradesCida'
import Moedas from './components/Moedas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Demo/> 
     <GradesCida/>
     <Moedas/>
    </>
  )
}

export default App
