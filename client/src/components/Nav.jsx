import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/newlisting">Add Listing</NavLink>
    </div>
  )
}

export default Nav
