import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        HANDMEDOWN
        <NavLink to="/" className="navlinks">
          <span className="material-symbols-outlined" id="navs">
            Home
          </span>
          Home
        </NavLink>
        <NavLink to="/newlisting" className="navlinks">
          <span className="material-symbols-outlined" id="navs">
            add_box
          </span>
          Add
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
