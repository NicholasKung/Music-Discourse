import React, { useState } from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre } = albumData

  return(
      <li className="tile-position">
        <div className="container">
          <Link to={`/albums/${id}`}><img src={art}></Link>
          <div className="overlay">
            <div className="tile-info">
            <span>{artist}</span> - <p>{album}</p>
          </div>
        </div>
          <br />

        </div>
      </li>
  )
}


export default AlbumTile
