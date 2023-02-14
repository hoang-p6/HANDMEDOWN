import { NavLink } from 'react-router-dom'
import Form from './Form'

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/newlisting">Add Listing</NavLink>
    </div>
  )
}

export default Nav
