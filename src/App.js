import React, { useState } from "react"
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

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board-wrapper">
        <div className="board">
          {board.map((qMark, index) => {
            return <Square qMark={qMark} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
