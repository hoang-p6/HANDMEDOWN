import { Link } from 'react-router-dom'
import Form from './Form'

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/newlisting">Add Listing</Link>
    </div>
  )
}

export default Nav
