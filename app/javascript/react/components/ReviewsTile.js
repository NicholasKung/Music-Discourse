import React, { useState, useEffect } from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date, user } = reviewData

  return(
    <div className="reviews-box">
      <li>
        <img className="profile-photo" src={user.profile_photo.url}/>
        <h4 className="review email">{email} </h4> <br/>
        <h3 className="review rating">{rating}</h3>
        <h4 className="review text">{review}</h4>
        <div className="date">{review_date}</div>
        <VotesTile
          handleVoteClick={handleVoteClick}
          votes={votes}
          />
      </li>
    </div>
  )
}

export default ReviewsTile
