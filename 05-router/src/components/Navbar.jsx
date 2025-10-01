import React from 'react'
import { Link } from 'react-router-dom'
 

function Navbar() {
  return (
   <nav>

    <Link to="/" >Home Page</Link>
    <Link to="/pagina1" >pg1</Link>
    <Link to="/pagina2" >pg2</Link>
    <Link to="/pagina3" >pg3</Link>

   </nav>
  )
}

export default Navbar