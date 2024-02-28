import React from 'react'

const RestartBtn = ({ handleRestart }) => {
    const handleClick = () => {
        handleRestart()
    }
  return (
    <>
        <button onClick={handleClick}>Play Again</button>
    </>
  )
}

export default RestartBtn