import React, { useState, useEffect } from 'react'
import AlbumShow from './AlbumShow'
import ReviewsTile from './ReviewsTile'
import ReviewsForm from './ReviewsForm'

const AlbumShowContainer = (props) => {
  const [ album, setAlbum ] = useState({})
  const [ reviews, setReviews ] = useState([])

  useEffect (() => {
    let albumId = props.match.params.id

    fetch(`/api/v1/albums/${albumId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(fetchedAlbum => {
      setAlbum(fetchedAlbum.album)
      setReviews(fetchedAlbum.album.reviews)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const submitNewReview = (formPayload) => {
  let albumId = props.match.params.id

    fetch(`/api/v1/albums/${albumId}/reviews`, {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayload),
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
         error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setReviews([
        ...reviews,
        body.review])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const reviewsTiles = reviews.map((review) => {
    return (
      <ReviewsTile
        key={review.id}
        reviewData={review}
      />
    )
  })

  return(
    <div>
      <h1>This is the album show container page</h1>
      <AlbumShow
        albumObject={album}
      />
    {reviewsTiles}
      <ReviewsForm
        onSubmit={submitNewReview}
        albumId={props.match.params.id}
      />
    </div>
  )
}

export default AlbumShowContainer;
