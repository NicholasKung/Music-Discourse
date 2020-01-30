import React, { useState, useEffect } from 'react'
import AlbumTile from "./AlbumTile"
import { Link } from "react-router-dom"

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

  const albumTiles = albums.map((album) => {
    return (
      <AlbumTile
        key={album.id}
        albumData={album}
      />
    )
  })

  return (
    <div>
      <h1>Albums Index Page</h1>
      <ul>
        {albumTiles}
      </ul>
      <Link to={`/albums/new`} className = "button">Add a New Album</Link>
    </div>
  )
}

export default AlbumIndex
