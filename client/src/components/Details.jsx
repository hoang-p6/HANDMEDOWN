import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = (props) => {
  const [listing, setListing] = useState('')

  const { id } = useParams()

  useEffect(() => {
    let selectedListing = props.listings.find(
      (listing) => listing._id === `${id}`
    )
    return setListing(selectedListing)
  }, [props.listings])
  return (
    <div>
      <h1>Item: {listing.item}</h1>
      <img src={listing.image} />
      <h2>Price: ${listing.price}</h2>
      <h3>Seller: {listing.seller}</h3>
      <h2>Email: {listing.email}</h2>
      <h2>Description:{listing.description}</h2>
      <h2>Sold:{listing.sold}</h2>
    </div>
  )
}

export default Details
