import React, { useState } from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre } = albumData

  return(
    <div className ="container tile-position art">
      <Link to={`/albums/${id}`}><img src={art}/></Link>
      <div className="overlay tile-info">
        <span>{artist}</span> - <p>{album}</p>
      </div>
      <br />
    </div>
  )
}

export default AlbumTile
