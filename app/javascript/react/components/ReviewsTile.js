import React, { useState, useEffect } from "react"
import VotesTile from "./VotesTile"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date, user } = reviewData

  const [votes, setVotes] = useState([])

  useEffect(() => {
    fetch(`/api/v1/albums/${albumId}/reviews/${id}/votes`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleVoteClick = (voteInfo) => {
  fetch(`/api/v1/albums/${albumId}/reviews/${id}/votes`, {
    credentials: "same-origin",
    method: 'POST',
    body: JSON.stringify(voteInfo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setVotes(body.votes)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

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
