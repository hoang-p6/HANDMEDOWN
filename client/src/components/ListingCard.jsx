import { NavLink, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ListingCard = (props) => {
  let navigate = useNavigate()
  return (
    <div
      className="row row-cols-md-5"
      style={{ display: 'flex', justifyContent: 'center', margin: 0 }}
    >
      {props.listings.map((listing) => (
        <Card
          className="p-0"
          as={NavLink}
          to={`listings/${listing._id}`}
          style={{
            margin: '1rem',
            width: '19rem',
            border: 'none',
            textDecoration: 'none'
          }}
        >
          <div className="card-body">
            <Card.Img
              className="img"
              src={listing.image}
              alt="Responsive image"
              style={{
                height: '15rem',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px'
              }}
            />

            <div
              className="card-header"
              style={{
                fontSize: 'medium',
                backgroundColor: 'white',
                bordeColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                border: 'none',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px'
              }}
            >
              {listing.item}
              <div style={{ color: 'green' }}>${listing.price}</div>
            </div>

            {/* <h3>Seller: {listing.seller}</h3> */}
            {/* <Link to={`listing/${listing._id}/edit`}>
              <button className="edit-button">
                <span className="material-symbols-outlined" id="edit">
                  edit_square
                </span>
              </button>
            </Link> */}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ListingCard
