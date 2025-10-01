import { useState } from 'react'
import './App.css'
import Pagina2 from './pages/Pagina2'
import Pagina1 from './pages/Pagina1'
import Pagina3 from './pages/Pagina3'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Home/>
        <Pagina1/>
        <Pagina2/>
        <Pagina3/>





      </div>
  )
}

export default App
