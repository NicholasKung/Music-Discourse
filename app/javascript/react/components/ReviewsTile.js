import React from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review } = reviewData

  return(
    <div className="reviews-box">
      <li>
      <span>{email}</span>|
      <h3>{rating}</h3>|
      <h4>{review}</h4>
      <i className="fas fa-volume-up"></i> | <i className="fas fa-volume-off"></i>
      </li>
    </div>
  )
}

export default ReviewsTile
