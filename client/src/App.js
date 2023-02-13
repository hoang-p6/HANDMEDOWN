import './App.css'
import Form from './components/Form'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [listings, setListings] = useState([])
  const getListings = async () => {
    try {
      let res = await axios.get('http://localhost:3001/listings')
      setListings(res.data)
    } catch (err) {
      console.log(err)
    }
    console.log()
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div>
      <h1>Add Listing</h1>
      <Form getListings={getListings} />
    </div>
  )
}

export default App
