import { useState } from 'react'
import axios from 'axios'

const OfferForm = (props) => {
  const initialState = {
    buyer: '',
    email: '',
    offer: '',
    comments: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [offers, setOffers] = useState(initialState)
  const getOffers = async () => {
    try {
      let res = await axios.get('http://localhost:3001/offers')
      setOffers(res.data)
    } catch (err) {
      console.log(err)
    }
    console.log(offers)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/offers', formState)
    console.log(formState)
    setFormState(initialState)
    getOffers()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="buyer">Buyer:</label>
      <input
        id="buyer"
        type="text"
        onChange={handleChange}
        value={formState.buyer}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={handleChange}
        value={formState.email}
      ></input>
      <label htmlFor="offer">Offer:</label>
      <input
        id="offer"
        type="number"
        onChange={handleChange}
        value={formState.offer}
      ></input>
      <label htmlFor="comments">Additional Comments:</label>
      <input
        id="comments"
        type="text"
        onChange={handleChange}
        value={formState.comments}
      ></input>

      <button type="submit">Add</button>
    </form>
  )
}

export default OfferForm
