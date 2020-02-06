import React from 'react'

const VotesTile = props => {
let upVoteCount = 0
  let downVoteCount = 0

  if (props.votes.length > 0) {
    props.votes.forEach(vote => {
      upVoteCount += vote.up
      downVoteCount += vote.down
    })
  }

  const handleClick = event => {
    event.preventDefault()
    props.handleVoteClick(event.currentTarget.id)
  }

  return(
    <div>
      <form>
        <i className="fas fa-volume-up upvote" id="up" onClick={handleClick}></i>
        <span className="vote-number" id="up-vote-span">{upVoteCount}</span>
        <i className="fas fa-volume-off downvote" id="down" onClick={handleClick}></i>
        <span className="vote-number" id="down-vote-span">{downVoteCount}</span>
      </form>
    </div>
  )
}

export default VotesTile
