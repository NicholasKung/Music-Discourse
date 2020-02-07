import React from 'react';
import { Link } from "react-router-dom"

const AlbumShow = ({ albumObject, deleteAlbum, userSignedIn, stateAverage }) => {
  let { id, name, art, artist, year, genre, album, average} = albumObject

  const handleDelete = (event) => {
    event.preventDefault()
    deleteAlbum(id)
  }

  return(
    <div>
      <h2 className="album">{album}</h2>
      <h3 className="avgrating">Average Rating: {stateAverage}</h3>
      <img src={art} />
      <h4 className="artist">{artist}</h4>
      <h6 className="year">{year}</h6>
      <p className="genre">{genre}</p>
      <input onClick={handleDelete} className="button" type="submit" value="Delete Album"/>
      <Link to={`/album/${albumObject.id}/edit`} className = "button">Edit Album</Link>
    </div>
  )
}

export default AlbumShow;
