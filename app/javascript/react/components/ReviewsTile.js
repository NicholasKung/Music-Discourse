import React, { useState, useEffect } from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date, user } = reviewData

  return(
    <div className="reviews-box">
      <li>
        <img className="profile-photo" src={user.profile_photo.url}/>
        <h4 className="review email">{email}</h4> <br/>
        <h3 className="review rating">{rating}</h3>
        <h5 className="review text">{review}</h5>
        <p className="date">{review_date}</p>
      </li>
    </div>
  )
}

export default ReviewsTile
