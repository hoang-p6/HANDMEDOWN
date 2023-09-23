import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialState)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left'
    })
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'bottom-right'
    })
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    try {
      const data = await axios.post(
        'http://localhost:3001/signup',
        formValues,
        { withCredentials: true }
      )

      const { success, message } = data
      if (success) {
        handleSuccess(message)
        navigate('/login')
        return data
      } else {
        handleError(message)
      }
    } catch (error) {
      console.log(error)
    }
    setFormValues(initialState)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          placeholder="First"
          onChange={handleChange}
        ></input>
        <label htmlFor="last">last</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          value={formValues.username}
          placeholder="Username"
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          placeholder="Password"
          required
          onChange={handleChange}
        ></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default Signup
