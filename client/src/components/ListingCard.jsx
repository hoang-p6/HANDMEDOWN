import { Link } from 'react-router-dom'

const ListingCard = (props) => {
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <div key={listing._id} className="card">
          <Link to={`listings/${listing._id}`} className="cardKey">
            <h1>Item: {listing.item}</h1>
            <h2>Price: ${listing.price}</h2>
            <h3>Seller: {listing.seller}</h3>
            <img src={listing.image} />
            <h2>Sold:{listing.sold}</h2>
          </Link>
          <Link to={`listing/${listing._id}/edit`}>
            <button className="edit-button">
              <span class="material-symbols-outlined">edit_square</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListingCard
