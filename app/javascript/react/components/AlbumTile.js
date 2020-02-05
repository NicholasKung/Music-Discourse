import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre } = albumData

  return(
    <div className="tile-position">
      <li className="container">
        <Link to={`/albums/${id}`}>
          <img src={art} />
        </Link>
      <div className="overlay">
        <div className="tile-info">
          <Link to={`/albums/${id}`}>
            <span>{artist}</span> - <p>{album}</p>
          </Link>
        </div>
      </div>
      </li>
    </div>
  )
}

export default AlbumTile
