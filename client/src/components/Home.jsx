const Home = ({ listings, getListings }) => {
  return (
    <div>
      <h1>Listings:</h1>
      {getListings}
      {listings.map((listing) => (
        <div key={listing._id}>
          <h2>Seller: {listing.seller}</h2>
          <h2>Email:{listing.email}</h2>
          <h2>Item:{listing.item}</h2>
          <h2>Description:{listing.description}</h2>
          <h2>Price:{listing.price}</h2>
          <h2>Sold:{listing.sold}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home
