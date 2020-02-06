import React, { useState } from "react"
import _ from "lodash"
import ErrorsList from "./ErrorsList"

const NewAlbumForm = (props) => {
  const[errors, setErrors] = useState({})
  const [newAlbum, setNewAlbum ] = useState({
    album: "",
    artist: "",
    genre: "",
    year: "",
    art: ""
  })

  const handleChange = event => {
    setNewAlbum({
      ...newAlbum,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validFormSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["album", "artist", "genre", "year", "art"]
    requiredFields.forEach((field) => {
      if(newAlbum[field].trim() === ""){
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = newAlbum;
    if(validFormSubmission()){
      props.onSubmit(formPayload)
      setNewAlbum({
        album: "",
        artist: "",
        genre: "",
        year: "",
        art: ""
      })
    }
  }

  return (
    <form onSubmit= {handleSubmit}>
      <ErrorsList errors={errors} />
      <label>
        Album Title:
        <input
          name="album"
          id="album"
          type="text"
          value={newAlbum.album}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Artist:
        <input
          name="artist"
          id="artist"
          type="text"
          value={newAlbum.artist}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Genre:
        <input
          name="genre"
          id="genre"
          type="text"
          value={newAlbum.genre}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Year:
        <input
          name="year"
          id="year"
          type="number"
          value={newAlbum.year}
          onChange={handleChange}
        />
      </label>

      <label>
        Album Art:
        <input
          name="art"
          id="art"
          type="text"
          value={newAlbum.art}
          onChange={handleChange}
        />
      </label>

      <div>
        <input className="button" type="submit" value="Add New Album"/>
      </div>
    </form>
  )
}

export default NewAlbumForm
