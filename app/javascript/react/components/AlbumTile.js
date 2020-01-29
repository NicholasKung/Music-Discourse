import React, { useState } from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre } = albumData
  
  return(
    <li>
      <div className="show-link">
        <Link to={`/albums/${id}`}><img src={art} /></Link>
         <br />
      </div>
        <span>{artist}</span> - <p>{album}</p>
    </li>
  )
}


export default AlbumTile
