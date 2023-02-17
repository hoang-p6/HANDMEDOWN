import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Form from './components/Form'
import Nav from './components/Nav'
import Home from './components/Home'
import Details from './components/Details'
import Edit from './components/Edit'

function App() {
  const [offers, setOffers] = useState([])
  const [listings, setListings] = useState([])
  const getListings = async () => {
    let res = await axios.get('http://localhost:3001/listings')
    setListings(res.data.listings)
  }
  const getOffers = async () => {
    let res = await axios.get('http://localhost:3001/offers')
    setOffers(res.data.offers)
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home listings={listings} getListings={getListings} />}
          />
          <Route
            path="/newlisting"
            element={<Form getListings={getListings} />}
          />
          <Route
            path="/listings/:id"
            element={
              <Details
                listings={listings}
                offers={offers}
                setOffers={setOffers}
                getOffers={getOffers}
                getListings={getListings}
              />
            }
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
