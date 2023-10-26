import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'boxicons'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import { LoginUser } from '../services/Auth'

const Login = ({ setUser, user }) => {
  const initialState = {
    email: '',
    password: ''
  }
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left'
    })
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'bottom-left'
    })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    try {
      const { data } = await axios.post(
        'http://localhost:3001/login',
        formValues
        // ,
        // {
        //   withCredentials: true
        // }
      )
      console.log(user)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
    // setFormValues({
    //   ...formValues,
    //   initialState
    // })
  }
  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{ color: '#ecc8af' }}
    >
      <h1
        class="display-3 "
        style={{
          display: 'flex',
          'justify-content': 'center',
          color: 'white'
        }}
      >
        Log In
      </h1>
      <div class="form-floating m-3" controlId="formBasicEmail">
        <input
          name="email"
          type="email"
          class="form-control"
          id="floatingInput"
          onChange={handleChange}
          placeholder="name@example.com"
          style={{
            backgroundColor: '#641b17',
            color: 'white',
            border: 'none',
            borderRadius: '0',
            borderBottom: '2px solid white'
          }}
        ></input>
        <label className="custom-floating" for="floatingInput">
          Email
        </label>
      </div>

      <div class="form-floating m-3" controlId="formBasicPassword">
        <input
          name="password"
          type="password"
          class="form-control"
          id="floatingInput"
          onChange={handleChange}
          placeholder="password"
          style={{
            backgroundColor: '#641b17',
            color: 'white',
            border: 'none',
            borderRadius: '0',
            borderBottom: '2px solid white'
          }}
        ></input>
        <label
          for="floatingInput"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          Password
        </label>
      </div>
      <Form.Group className="m-3">
        <Button
          onClick={handleSubmit}
          class="login-btn"
          style={{ backgroundColor: 'white', color: 'black', border: 'none' }}
        >
          Log In
        </Button>
        <Form.Text className="m-2" style={{ color: 'white' }}>
          Don't have an account?
          <a href="/signup" className="m-1">
            Sign Up
          </a>
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default Login
