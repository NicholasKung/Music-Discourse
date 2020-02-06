import React, { useState, useEffect } from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date } = reviewData

  return(
    <div className="reviews-box">
      <li>
        <h4>{email} | {review_date}</h4>|
        <h3>{rating}</h3>|
        <h4>{review}</h4>
      </li>
    </div>
  )
}

export default ReviewsTile
