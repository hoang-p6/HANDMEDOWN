const ListingCard = (props) => {
  return (
    <div className="listingCards">
      {props.listings.map((listing) => (
        <div key={listing._id} className="card">
          <h2>Seller: {listing.seller}</h2>
          {/* <h2>Email: {listing.email}</h2> */}
          <h2>Item: {listing.item}</h2>
          {/* <h2>Description:{listing.description}</h2> */}
          <h2>Price: ${listing.price}</h2>
          {/* <h2>Sold:{listing.sold}</h2> */}
        </div>
      ))}
    </div>
  )
}

export default ListingCard
