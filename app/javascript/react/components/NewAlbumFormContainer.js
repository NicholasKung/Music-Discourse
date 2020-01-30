import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import NewAlbumForm from "./NewAlbumForm"


const NewAlbumFormContainer = (props) =>{
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [albums, setAlbums] = useState([])

  const submitNewAlbum = (formPayload) => {

  fetch('/api/v1/albums.json', {
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
    setAlbums([
      ...albums,
      body])
    setShouldRedirect(true)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

if(shouldRedirect) {
  let albumId = albums[0].album.id
  return <Redirect to ={`/albums/${albumId}`} />
}

  return (
    <NewAlbumForm
      onSubmit = {submitNewAlbum}
    />
  )
}

export default NewAlbumFormContainer
