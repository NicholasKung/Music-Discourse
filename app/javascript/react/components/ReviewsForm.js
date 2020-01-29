import React, { useState } from "react"

const ReviewsForm = (props) => {
  const[reviewRecord, setReviewRecord] = useState({
    rating: "",
    review: ""
  })

  const handleChange = (event) => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addReview(reviewRecord)
    setReviewRecord({
      rating: "",
      review: ""
    })
  }

  // Must Setup Props from AlbumShowContainer

  return(
    <div>
      <form className="reviews-form" onSubmit={handleSubmit}>

        <label>
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            onChange={handleChange}
            value={reviewRecord.rating}
            />
        </label>

        <label>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={reviewRecord.value}
            />
        </label>

        <input
          type="submit"
          className="button"
          value="Submit Review"
          />

      </form>
    </div>

  )
}

export default ReviewsForm
