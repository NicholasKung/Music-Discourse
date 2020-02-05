import React from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review } = reviewData

  return(
    <div className="reviews-box">
      <li>
      <span>{email}</span>|
      <h3>{rating}</h3>|
      <h4>{review}</h4>
      </li>
    </div>
  )
}

export default ReviewsTile
