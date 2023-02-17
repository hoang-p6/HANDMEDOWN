import ListingCard from './ListingCard'
const Home = ({ listings, getListings }) => {
  return (
    <div>
      <h1>Listings</h1>
      <ListingCard listings={listings} getListings={getListings} />
    </div>
  )
}

export default Home
