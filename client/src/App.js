import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ListingForm from './components/ListingForm'
import Navigation from './components/Nav'
import Home from './components/Home'
import Details from './components/Details'
import Edit from './components/Edit'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const BASE_URL = 'http://localhost:3001'
  const [listings, setListings] = useState([])
  const getListings = async () => {
    let res = await axios.get(`${BASE_URL}/listings`)
    setListings(res.data.listings)
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home listings={listings} getListings={getListings} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
