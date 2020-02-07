import React, { useState, useEffect } from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date } = reviewData

  return(
    <div className="reviews-box">
      <li>
        <h4>{email}</h4>|
        <p>{review_date}</p>
        <h3>{rating}</h3>|
        <h5>{review}</h5>
      </li>
    </div>
  )
}

export default ReviewsTile
