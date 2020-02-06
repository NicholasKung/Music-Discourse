import React, { useState, useEffect } from "react"
import VotesTile from "./VotesTile"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review, albumId, id, review_date } = reviewData

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
        <h3>{email}</h3>|
        <h3>{rating}</h3>|
        <h4>{review}</h4>
        <h4>{review_date}</h5>
        <VotesTile
          handleVoteClick={handleVoteClick}
          votes={votes}
          />
      </li>
    </div>
  )
}

export default ReviewsTile
