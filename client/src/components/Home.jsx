import ListingCard from './ListingCard'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import Nav from '../components/Nav'
import { ToastContainer, toast } from 'react-toastify'

const Home = ({ listings, getListings }) => {
  const navigate = useNavigate()
  const [cookies, removeCookie] = useCookies([])
  const [userName, setUsername] = useState('')
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login')
      }
      const { data } = await axios.post(
        'http://localhost:3001',
        {},
        { withCredentials: true }
      )
      // const { status, user } = data
      // setUsername(user)
      // console.log(cookies)
      // return status
      //   ? toast(`Hello ${user}`, {
      //       position: 'top-right'
      //     })
      //   : (removeCookie('token'), navigate('/login'))
    }
    verifyCookie()
  }, [cookies, navigate, removeCookie])
  const Logout = () => {
    removeCookie('token')
    navigate('/signup')
  }

  return (
    <div>
      <ListingCard listings={listings} getListings={getListings} />
    </div>
  )
}

export default Home
