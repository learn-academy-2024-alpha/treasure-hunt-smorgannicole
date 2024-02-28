import React, { useState, useEffect } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [winningIndex, setWinningIndex] = useState(0)
  useEffect(() => {
    getWinningIndex()
  }, [])

  const getWinningIndex = () => {
    const randIndex = Math.floor(Math.random() * board.length)
    setWinningIndex(randIndex)
  }

  const handleGamePlay = (index) => {
    const newBoard = [...board]
    if (index === winningIndex) {
      newBoard[index] = "💰"
      setBoard(newBoard)
    } else {
      newBoard[index] = "💣"
      setBoard(newBoard)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-wrapper">
        <div className="board">
          {board.map((qMark, index) => {
            return <Square qMark={qMark} index={index} key={index} handleGamePlay={handleGamePlay} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
