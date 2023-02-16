import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ListingCard = (props) => {
  let { id } = useParams()
  const showListing = (listing) => {}
  const deleteListing = async () => {
    await axios.delete(`http://localhost:3001/listings/${id}`)
    props.getListings()
  }
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
        </div>
      ))}
    </div>
  )
}

export default ListingCard
