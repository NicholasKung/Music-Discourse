import React, { useState } from "react"

const AlbumTile = (props) => {
  return(
    <li>
      <img src={props.art} /> <br />
      <span>{props.artist}</span> - <p>{props.album}</p>
    </li>
  )
}

export default AlbumTile
