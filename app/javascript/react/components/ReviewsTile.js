import React from "react"

const ReviewsTile = ({ reviewData }) => {
  let { email, rating, review } = reviewData

  return(
    <div>
      <li>
      {email}| {rating} | {review}
      </li>
    </div>
  )
}

export default ReviewsTile
