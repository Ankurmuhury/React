import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
    <li><Link class="active" to="/">Home</Link></li>
    <li><Link to="/news">News</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/about">About</Link></li>
    <Link className='btn btn-outline-light' style={{"margin-top":" 6px",
   "margin-left": "47rem"}} to={"/users/add"}> Add user</Link>
  </ul>
 
    </div>
    
  )
}

export default Navbar
