import { Link } from 'react-router-dom'

const ListingCard = (props) => {
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <Link
          to={`/listings/${listing._id}`}
          className="cardKey"
          key={listing._id}
        >
          <div className="card">
            <h1>Item: {listing.item}</h1>
            <h2>Price: ${listing.price}</h2>
            <h3>Seller: {listing.seller}</h3>
            <img src={listing.image} />
            <Link to={`listing/${listing._id}/edit`}>
              <button className="edit-button">
                <span className="material-symbols-outlined" id="edit">
                  edit_square
                </span>
              </button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListingCard
