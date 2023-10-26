import ListingCard from './ListingCard'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/Nav'
import { ToastContainer, toast } from 'react-toastify'

const Home = ({ listings, getListings }) => {
  const navigate = useNavigate()

  useEffect(() => {}, [])
  const Logout = () => {
    navigate('/signup')
  }

  return (
    <div>
      <ListingCard listings={listings} getListings={getListings} />
    </div>
  )
}

export default Home
