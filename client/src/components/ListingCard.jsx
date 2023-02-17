import { Link } from 'react-router-dom'

const ListingCard = (props) => {
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <Link to={`listings/${listing._id}`} className="cardKey">
          <div key={listing._id} className="card">
            <h1>Item: {listing.item}</h1>
            <h2>Price: ${listing.price}</h2>
            <h3>Seller: {listing.seller}</h3>
            <img src={listing.image} />
            <h2>Sold:{listing.sold}</h2>
            <Link to={`listing/${listing._id}/edit`}>
              <button className="edit-button">
                <span class="material-symbols-outlined">edit_square</span>
              </button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListingCard
