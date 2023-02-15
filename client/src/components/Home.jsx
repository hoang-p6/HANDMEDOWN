import ListingCard from './ListingCard'
const Home = (props) => {
  return (
    <div>
      <h1>Listings</h1>
      <ListingCard listings={props.listings} />
    </div>
  )
}

export default Home
