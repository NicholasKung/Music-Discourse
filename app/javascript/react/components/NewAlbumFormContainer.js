import React, { useState, useEffect } from "react"
import NewAlbumForm from "./NewAlbumForm"


const NewAlbumFormContainer = (props) =>{
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
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  return (
    <NewAlbumForm
      onSubmit = {submitNewAlbum}
    />
  )
}

export default NewAlbumFormContainer
