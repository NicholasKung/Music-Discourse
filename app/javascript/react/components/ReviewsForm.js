import React, { useState } from "react"
import _ from "lodash"
import ErrorsList from "./ErrorsList"

const ReviewsForm = (props) => {
  const[reviewRecord, setReviewRecord] = useState({
    rating: "",
    review: ""
  })

  const[errors, setErrors] = useState({})

  const handleChange = (event) => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
      if(reviewRecord["rating"].trim() === ""){
        submitErrors = {
          ...submitErrors,
          ["rating"]: "is blank"
        }
      }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = reviewRecord
    if(validFormSubmission()){
      props.onSubmit(formPayload)
      setReviewRecord({
        rating: "",
        review: ""
      })
    }
  }

  return(
    <div>
      <form className="reviews-form" onSubmit={handleSubmit}>

        <ErrorsList errors={errors} />

        <label>Rating
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            onChange={handleChange}
            value={reviewRecord.rating}
            />
        </label>

        <label>Review
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={reviewRecord.review}
            />
        </label>

        <input
          type="hidden"
          name="albumId"
          value={props.albumId}
          />

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
