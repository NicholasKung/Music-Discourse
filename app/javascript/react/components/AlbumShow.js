import React from 'react';

const AlbumShow = ({ albumObject, deleteAlbum, userSignedIn }) => {
  let { id, name, art, artist, year, genre, album, average} = albumObject

  const handleDelete = (event) => {
    event.preventDefault()
    deleteAlbum(id)
  }

  return(
    <div>
      <h1>This is the album show page</h1>
      <h2>{album}</h2>
      <h3>Average Rating: {average}</h3>
      <img src={art} />
      <h4>{artist}</h4>
      <h6>{year}</h6>
      <p>{genre}</p>
      <input onClick={handleDelete} className="button" type="submit" value="Delete Album"/>
      <input className="button" type="submit" value="Edit Album"/>
    </div>
  )
}

export default AlbumShow;
