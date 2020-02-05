import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre } = albumData

  return(
    <div className="tile-position">
      <li className="container">
        <div>
          <Link to={`/albums/${id}`}>
            <img src={art} />
          </Link>
        </div>
      <div className="overlay">
        <div className="tile-info">
          <div>
              <span>{artist}</span> - <p>{album}</p>
          </div>
        </div>
      </div>
      </li>
    </div>
  )
}

export default AlbumTile
