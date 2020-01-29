import React, { useState, useEffect } from 'react'
import AlbumShow from './AlbumShow'

const AlbumShowContainer = (props) => {
  const [ album, setAlbum ] = useState({})

  useEffect (() => {
    let albumId = props.match.params.id

    fetch(`/api/v1/albums/${albumId}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        const errror = new Error(`${response.status}: ${response.statusText}`);
        throw(error)
      }
    })
    .then(fetchedAlbum => {
      setAlbum(fetchedAlbum)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  return(
    <div>
      <h1>This is the album show container page</h1>
      <AlbumShow
        albumObject={album}
      />
    </div>
  )
}

export default AlbumShowContainer;
