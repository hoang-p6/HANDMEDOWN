import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ListingCard = (props) => {
  let { id } = useParams()
  const [formState, setFormState] = useState('')

  let foundListing = props.listings.filter((listing) => {
    return listing._id === id
  })
  const findListing = () => {
    setFormState(foundListing[0])
    console.log(formState)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  // let navigate = useNavigate()
  const deleteListing = async (event) => {
    event.preventDefault()
    let updatedListing = {
      seller: formState.seller,
      email: formState.email,
      item: formState.item,
      image: formState.image,
      description: formState.description,
      price: formState.price
    }
    await axios.delete(`http://localhost:3001/listings/${id}`, updatedListing)
    foundListing[0] = updatedListing
    setFormState('')
    // navigate(`/listings/${id}`)
    props.getListings()
  }

  useEffect(() => {
    findListing()
  })
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <div key={listing._id} className="card">
          <Link to={`listings/${listing._id}`}>
            <h1>Item: {listing.item}</h1>
            <h2>Price: ${listing.price}</h2>
            <h3>Seller: {listing.seller}</h3>
            <h2>Sold:{listing.sold}</h2>
          </Link>

          <Link to={`listing/${listing._id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={deleteListing}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ListingCard
