import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

const Navigation = () => {
  return (
    <NavBar
      fixed="top"
      style={{
        padding: '.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '0px 2px 10px -6px rgba(0, 0, 0, 1)'
      }}
    >
      <NavBar.Brand href="/">HANDMEDOWN</NavBar.Brand>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Nav.Link as={NavLink} to="/login" className="login p-2">
          Log In
        </Nav.Link>
        <Nav.Link as={NavLink} to="/signup" className="signup p-2">
          Sign Up
        </Nav.Link>
      </div>
    </NavBar>
  )
}

export default Navigation
