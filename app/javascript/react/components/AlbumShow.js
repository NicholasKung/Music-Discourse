import React from 'react';

const AlbumShow = ({ albumObject }) => {
  let { id, name, art, artist, year, genre, album } = albumObject

  return(
    <div>
      <h1>This is the album show page</h1>
      <h2>{album}</h2>
      <img src={art} />
      <h3>{artist}</h3>
      <h6>{year}</h6>
      <p>{genre}</p>
    </div>
  )
}

export default AlbumShow;
