import React, { useState, useEffect } from 'react'
import AlbumShow from './AlbumShow'
import { Redirect } from 'react-router-dom'
import ReviewsTile from './ReviewsTile'
import ReviewsForm from './ReviewsForm'

const AlbumShowContainer = (props) => {
  const [ album, setAlbum ] = useState({})
  const [ reviews, setReviews ] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [ userSignedIn, setUserSignedIn ] = useState(null)

  let albumId = props.match.params.id

  useEffect (() => {
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
      setUserSignedIn(fetchedAlbum.user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const submitNewReview = (formPayload) => {
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
        body.review
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  const deleteAlbum = (albumId) => {
    fetch(`/api/v1/albums/${albumId}`, {
      credentials: "same-origin",
      method: 'DELETE',
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
        setShouldRedirect(true)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if(shouldRedirect) {
    return <Redirect to={"/"} />
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
      <AlbumShow
        albumObject={album}
        deleteAlbum={deleteAlbum}
        userSignedIn={userSignedIn}
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
