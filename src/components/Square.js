import React from "react"

const Square = ({ qMark, index, handleGamePlay }) => {
  const handleClick = () => {
    handleGamePlay(index)
  }
  return (
    <>
      <div className="square" onClick={handleClick}>{qMark}</div>
    </>
  )
}
export default Square
