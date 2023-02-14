import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Form from './components/Form'
import Nav from './components/Nav'
import Home from './components/Home'

function App(props) {
  const [listings, setListings] = useState([])
  const getListings = async () => {
    try {
      let res = await axios.get('http://localhost:3001/listings')
      setListings(res.data)
    } catch (err) {
      console.log(err)
    }
    console.log(listings)
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div class="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home listings={listings} getListings={getListings} />}
          />
          <Route path="/newlisting" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
