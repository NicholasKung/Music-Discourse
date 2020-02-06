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
        setAlbums(body.albums)
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
      <div className="index-header">
        <h2>Rate Your Favorite Albums!</h2>
        <Link to={`/albums/new`} className = "button">Add a New Album</Link>
      </div>
      <ul>
        {albumTiles}
      </ul>
    </div>
  )
}

export default AlbumIndex
