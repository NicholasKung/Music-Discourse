import React, { useState } from "react"

const AlbumTile = (props) => {
  return(
    <li>
      <img src={props.albumData.art} /> <br />
      <p>{props.albumData.artist} | {props.albumData.album}</p>
    </li>

  )
}

export default AlbumTile
