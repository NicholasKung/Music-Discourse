import React from 'react';
import { Link } from "react-router-dom"

const AlbumShow = ({ albumObject, deleteAlbum, userSignedIn }) => {
  let { id, name, art, artist, year, genre, album} = albumObject

  const handleDelete = (event) => {
    event.preventDefault()
    deleteAlbum(id)
  }

  return(
    <div>
      <h1>This is the album show page</h1>
      <h2>{album}</h2>
      <img src={art} />
      <h3>{artist}</h3>
      <h6>{year}</h6>
      <p>{genre}</p>
      <input onClick={handleDelete} className="button" type="submit" value="Delete Album"/>
      <Link to={`/album/${albumObject.id}/edit`} className = "button">Edit Album</Link>
    </div>
  )
}

export default AlbumShow;
