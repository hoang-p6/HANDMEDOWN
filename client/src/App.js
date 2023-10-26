import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import ListingForm from './components/ListingForm'
import Navigation from './components/Nav'
import Home from './components/Home'
import Details from './components/Details'
import Edit from './components/Edit'
import Signup from './components/Signup'
import Login from './components/Login'
import { CheckSession } from './services/Auth'
import { BASE_URL } from './services/api'

function App() {
  const [listings, setListings] = useState([])
  const [user, setUser] = useState(null)
  const getUserById = async () => {
    let res = await axios.get(`${BASE_URL}/${user.id}`)
    console.log(res)
  }
  const getListings = async () => {
    let res = await axios.get(`${BASE_URL}/listings`)
    setListings(res.data.listings)
  }
  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    console.log(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getListings()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Navigation handleLogout={handleLogout} user={user} />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home listings={listings} getListings={getListings} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />
          <Route
            path="/newlisting"
            element={<ListingForm getListings={getListings} />}
          />
          <Route
            path="/listings/:id"
            element={<Details listings={listings} getListings={getListings} />}
          />
          <Route
            path="/listing/:id/edit"
            element={<Edit listings={listings} getListings={getListings} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
