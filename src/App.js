import React, { useState, useEffect } from "react"
import "./App.css"
import Square from './components/Square'
import RestartBtn from "./components/RestartBtn"
import Counter from "./components/Counter"

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
  const [counter, setCounter] = useState(5)


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
      setTimeout(() => {
        alert("You Win")
        handleRestart()
      }, "500")
    } else {
      newBoard[index] = "💣"
      setBoard(newBoard)
      let prevCounter = counter
      let updateCounter = prevCounter - 1
      setCounter(updateCounter)
    }
  }

  const handleRestart = () => {
    const cleanBoard = [
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ]
    const restartCounter = 5
    setBoard(cleanBoard)
    getWinningIndex()
    setCounter(restartCounter)
  }

  useEffect(() => {
    if (counter === 0) {
      setTimeout(() => {
        alert("Game Over");
      handleRestart()
      }, "500")
    }
  }, [counter]);

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Counter counter={counter} />
      <div className="board-wrapper">
        <div className="board">
          {board.map((qMark, index) => {
            return <Square qMark={qMark} index={index} key={index} handleGamePlay={handleGamePlay} />
          })}
          <RestartBtn handleRestart={handleRestart} />
        </div>
        
      </div>
    </>
  )
}

export default App
