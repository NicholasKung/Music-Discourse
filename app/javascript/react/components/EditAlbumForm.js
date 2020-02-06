import React, { useState } from "react"
import _ from "lodash"
import { Redirect } from 'react-router-dom'
import ErrorsList from "./ErrorsList"

const EditAlbumForm = (props) => {
  let albumId = props.match.params.id
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const[errors, setErrors] = useState({})
  const [ editAlbum, setEditAlbum ] = useState({
    album: "",
    artist: "",
    genre: "",
    year: "",
    art: ""
  })

  const handleChange = event => {
    setEditAlbum({
      ...editAlbum,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["album", "artist", "genre", "year", "art"]
    requiredFields.forEach((field) => {
      if(editAlbum[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    let formPayload = editAlbum;
    if(validFormSubmission()){
      editFetch(formPayload)
      setEditAlbum({
        album: "",
        artist: "",
        genre: "",
        year: "",
        art: ""
      })
    }
  }

  const editFetch = (formPayload) => {
    fetch(`/api/v1/albums/${albumId}`, {
      credentials: "same-origin",
      method: 'PATCH',
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
        setEditAlbum(body.album)
        setShouldRedirect(true)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

if(shouldRedirect) {
  return <Redirect to ={`/albums/${albumId}`} />
}

  return (
    <form onSubmit= {handleEdit}>
      <ErrorsList errors={errors} />
      <label>
        Album Title:
        <input
          name="album"
          id="album"
          type="text"
          value={editAlbum.album}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Artist:
        <input
          name="artist"
          id="artist"
          type="text"
          value={editAlbum.artist}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Genre:
        <input
          name="genre"
          id="genre"
          type="text"
          value={editAlbum.genre}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Year:
        <input
          name="year"
          id="year"
          type="number"
          value={editAlbum.year}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Art:
        <input
          name="art"
          id="art"
          type="text"
          value={editAlbum.art}
          onChange={handleChange}
        />
      </label>

      <div>
        <input className="button" type="submit" value="Edit Album"/>
      </div>
    </form>
  )
}

export default EditAlbumForm
