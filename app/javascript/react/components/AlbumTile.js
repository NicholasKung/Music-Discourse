import React, { useState } from "react"
import { Link } from "react-router-dom"

const AlbumTile = (props) => {
  
  return(
    <li>
      <div className="show-link">
        <Link to={`/albums/${props.id}`}><img src={props.art} /></Link>
         <br />
      </div>
        <span>{props.artist}</span> - <p>{props.album}</p>
    </li>
  )
}

export default AlbumTile
