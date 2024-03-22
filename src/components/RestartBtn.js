import React from 'react'
import flower from './images/flower-restart-2.png'

const RestartBtn = ({ handleRestart }) => {
  return (
    <>
      <img className='flower' onClick={() => handleRestart()} src={flower} alt="restart flower" />
    </>
  )
}

export default RestartBtn