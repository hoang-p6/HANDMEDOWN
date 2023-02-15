import { Link } from 'react-router-dom'
import Details from './Details'
const ListingCard = (props) => {
  const showListing = (listing) => {}
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <div
          key={listing._id}
          className="card"
          onClick={() => showListing(listing)}
        >
          <Link to={`listings/${listing._id}`}>
            <h1>Item: {listing.item}</h1>
            <h2>Price: ${listing.price}</h2>
            <h3>Seller: {listing.seller}</h3>
            {/* <h2>Email: {listing.email}</h2> */}
            {/* <h2>Description:{listing.description}</h2> */}
            {/* <h2>Sold:{listing.sold}</h2> */}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListingCard
