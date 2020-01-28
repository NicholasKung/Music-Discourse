import React, { useState } from "react"

const AlbumTile = (props) => {
  return(
    <li>
      <img src={props.art} /> <br />
      <span>{props.artist}</span> | <span>{props.album}</span>
    </li>

  )
}

export default AlbumTile
