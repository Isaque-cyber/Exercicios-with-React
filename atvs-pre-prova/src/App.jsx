import { useState } from 'react'
import './App.css'
import MediaEscolar from './components/MediaEscolar'
import Pneu from './components/Pneu'


function App() {
  const [valorTotal, setCount] = useState(0)

  return (
    <div>
     
      <MediaEscolar/>
      <Pneu/>
    </div>
     
     

  )
}

export default App
