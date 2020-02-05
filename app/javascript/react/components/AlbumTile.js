import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = ({ albumData }) => {
  let { id, album, art, artist, year, genre, average } = albumData

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
<<<<<<< HEAD
      <h4>Average Rating: {average}</h4>
      <br />
=======
      </li>
>>>>>>> 7a5d6175ffa787a8f022cb390c7f91a65db5628b
    </div>
  )
}

export default AlbumTile
