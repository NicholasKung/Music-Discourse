import React, { useState } from "react"

const NewAlbumForm = (props) => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = newAlbum;
    props.onSubmit(formPayload)
    setNewAlbum({
      album: "",
      artist: "",
      genre: "",
      year: "",
      art: ""
    })
  }

  return (
    <form onSubmit= {handleSubmit}>
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
