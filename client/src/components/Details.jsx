import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OfferForm from './OfferForm'
import axios from 'axios'

const Details = ({ listings, offers, setOffers, getOffers }) => {
  const [listing, setListing] = useState(listings)

  const { id } = useParams()

  const selectListing = () => {
    setListing(listings.find((listing) => listing._id === `${id}`))
  }
  const offerDelete = async (offerId) => {
    await axios.delete(`http://localhost:3001/offers/${offerId}`)
    getOffers()
  }
  useEffect(() => {
    selectListing()
    getOffers()
  }, [listings])
  return (
    <>
      <div>
        {listing && (
          <div className="details-container">
            <div>
              <h1>Item: {listing.item}</h1>
              <img className="details-image" src={listing.image} />
              <h2>Price: ${listing.price}</h2>
              <h3>Seller: {listing.seller}</h3>
              <h2>Email: {listing.email}</h2>
              <h2>Description: {listing.description}</h2>
            </div>
            <OfferForm
              offers={offers}
              setOffers={setOffers}
              getOffers={getOffers}
            />
            {offers &&
              offers.map((offer) => (
                <div key={offer._id} className="offer-section">
                  {' '}
                  <h1>OFFERS</h1>
                  <h3>Buyer: {offer.buyer}</h3>
                  <h3>Email: {offer.email}</h3>
                  <h3>Offer: ${offer.offer}</h3>
                  <h3>Additional Comments: {offer.comments}</h3>
                  <button onClick={() => offerDelete(offer._id)}>
                    Delete Offer
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Details
