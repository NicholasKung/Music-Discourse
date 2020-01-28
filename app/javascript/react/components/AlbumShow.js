import React, {useState, useEffect} from 'react';

const AlbumShow = (props) => {

  return(
    <div>
      <h1>This is the album show page</h1>
      <h2>{props.album}</h2>
      <img src={props.art} />
      <h3>{props.artist}</h3>
      <h6>{props.year}</h6>
      <p>{props.genre}</p>
    </div>
  )
}

export default AlbumShow;
