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
  const [listings, setListings] = useState([])
  const getListings = async () => {
    try {
      let res = await axios.get('http://localhost:3001/listings')
      setListings(res.data.listings)
    } catch (err) {
      console.log(err)
    }
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
          <Route path="/" element={<Home listings={listings} />} />
          <Route path="/newlisting" element={<Form />} />
          <Route
            path="/listings/:id"
            element={<Details listings={listings} />}
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
