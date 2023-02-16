import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Edit = (props) => {
  let { id } = useParams()
  const [formState, setFormState] = useState('')

  let foundListing = props.listings.filter((listing) => {
    return listing._id === id
  })
  const findListing = () => {
    setFormState(foundListing[0])
    console.log(formState)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  let navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    let updatedListing = {
      seller: formState.seller,
      email: formState.email,
      item: formState.item,
      image: formState.image,
      description: formState.description,
      price: formState.price
    }
    await axios.put(`http://localhost:3001/listings/${id}/edit`, updatedListing)
    foundListing[0] = updatedListing
    setFormState('')
    navigate(`/listings/${id}`)
    props.getListings()
  }

  useEffect(() => {
    findListing()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="seller">Seller:</label>
      <input
        id="seller"
        type="text"
        onChange={handleChange}
        value={formState.seller}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={handleChange}
        value={formState.email}
      ></input>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        type="text"
        onChange={handleChange}
        value={formState.item}
      ></input>
      <label htmlFor="image">Image:</label>
      <input
        id="image"
        type="text"
        onChange={handleChange}
        value={formState.image}
      ></input>
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        onChange={handleChange}
        value={formState.description}
      ></input>
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="number"
        onChange={handleChange}
        value={formState.price}
      ></input>
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default Edit
