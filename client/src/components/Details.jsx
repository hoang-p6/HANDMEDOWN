import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001'

const Details = ({ listings }) => {
  const [listing, setListing] = useState(listings)

  const { id } = useParams()

  const selectListing = () => {
    setListing(listings.find((listing) => listing._id === `${id}`))
  }

  useEffect(() => {
    selectListing()
  }, [listings])
  return (
    <>
      <div>
        {listing && (
          <div className="details-container">
            <div>
              <h1>Item: {listing.item}</h1>
              <img className="details-image" src={listing.image} />
              <h2>Price: ${listing.price}</h2>
              <h3>Seller: {listing.seller}</h3>
              <h2>Email: {listing.email}</h2>
              <h2>Description: {listing.description}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Details
