import React, { useState, useEffect } from 'react'

const AlbumIndex = (props) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('/api/v1/albums.json')
      .then(response => {
        if(response.ok) {
          return response
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(response => response.json())
      .then(body => {
        setAlbums(body)
      })
      .catch(error => {
        console.log(`Error fetching albums: ${error.message}`)
      })
  }, [])

  const albumTiles = albums.map(album => {
    return (
      <li>
        <p>
          <img src="album.art" alt="Album Art"/>
          <br/>
          <span> {album.album} </span>
        </p>
      </li>
    )
  })

  return (
    <div>
      <h1>Albums Index Page</h1>
      <ul>
        {albumTiles}
      </ul>
    </div>
  )
}

export default AlbumIndex
