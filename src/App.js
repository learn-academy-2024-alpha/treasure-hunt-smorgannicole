import React, { useState, useEffect } from "react"
import "./App.css"
import Mushrooms from "./components/Mushrooms"
import RestartBtn from "./components/RestartBtn"
import Counter from "./components/Counter"
import Notebook from "./components/Notebook"
import basketImg from "./components/images/basket.png"
import beige1 from "./components/images/beige1.png"
import beige3 from "./components/images/beige3.png"
import beige4 from "./components/images/beige4.png"
import beige5 from "./components/images/beige5.png"
import beige6 from "./components/images/beige6.png"
import red2 from "./components/images/red2.png"
import red3 from "./components/images/red3.png"
import red4 from "./components/images/red4.png"
import red5 from "./components/images/red5.png"

const App = () => {
  const [board, setBoard] = useState([])
  const [counter, setCounter] = useState(5)
  const [winningIndex, setWinningIndex] = useState(null)
  const [basket, setBasket] = useState([])
  const [clickedMushroom, setClickedMushroom] = useState({ src: '' })

  useEffect(() => {
    initializeBoard()
    getWinningIndex()
  }, [])

  const initializeBoard = () => {
    const mushroomImages = [
      beige1, beige3, beige4, beige5, beige6, red2, red3, red4, red5
    ]
    const shuffledMushrooms = shuffleArray(mushroomImages)
    const newBoard = shuffledMushrooms.map((src, index) => ({
      src: src,
      message: "",
      className: `mushroom${index + 1}`
    }))
    setBoard(newBoard)
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const getWinningIndex = () => {
    const randIndex = Math.floor(Math.random() * board.length)
    setWinningIndex(randIndex)
  }

  const randomMessage = () => {
    const significanceMessages = [
      "Environmental Hero: This mushroom plays a vital role in ecosystems, breaking down organic matter and contributing to soil health",
      "Nature's Medicine: With its medicinal properties, this mushroom has been cherished for centuries as a natural remedy for various ailments",
      "Immune Booster: These fungi pack a punch when it comes to supporting our immune systems, helping us stay healthy and strong",
      "Culinary Delight: This mushroom is widely used in cooking to add flavor, texture, and nutritional value to various dishes",
      "Artistic Inspiration: From whimsical fairy tales to fantastical landscapes, this mushroom has sparked creativity and imagination in art and literature.",
      "DIY Project: Crafters and hobbyists use this mushroom in creative projects, such as dye-making, paper-making, and even home décor",
      "Spiritual Journeyman: In many cultures, this mushroom holds spiritual significance, used in rituals and ceremonies to connect with nature and the divine",
      "Scientific Marvel: Scientists study this mushroom for its fascinating properties, unlocking secrets of biodiversity, medicine, and biotechnology.",
    ]
    const randNum = Math.floor(Math.random() * significanceMessages.length)
    return significanceMessages[randNum]
  }

  const handleGamePlay = (index) => {
    const newBoard = [...board]
    if (index === winningIndex) {
      newBoard[index] = {
        src: "",
        message: "Congratulations! You found the magic mushroom!",
      }
      setBoard(newBoard)
      setTimeout(() => {
        alert("You Win")
        handleRestart()
      }, 500)
    } else if (counter === 1) {
      setCounter(0)
      newBoard[index] = {
        src: "",
        message: "You didn't find the Magic Mushroom in time",
      }
      setBoard(newBoard)
      setTimeout(() => {
        alert("You Lose")
        handleRestart()
      }, 500)
    } else {
      const clickedMushroom = newBoard[index]
      setBasket([...basket, clickedMushroom])
      newBoard[index] = { src: clickedMushroom.src, message: randomMessage() }
      setBoard(newBoard)
      let prevCounter = counter
      let updateCounter = prevCounter - 1
      setCounter(updateCounter)
      setClickedMushroom(newBoard[index])
    }
  }

  const handleRestart = () => {
    const restartCounter = 5
    initializeBoard()
    getWinningIndex()
    setCounter(restartCounter)
    setBasket([])
    setClickedMushroom(null)
  }

  return (
    <div className="page-wrapper">
      <h1 className="title">Magic Mushroom Hunt</h1>
      <Counter counter={counter} />
      <div className="board-wrapper">
        <div className="board">
          {board.map((mushroom, index) => (
            <Mushrooms
              key={index}
              src={mushroom.src}
              className={mushroom.className}
              message={mushroom.message}
              onClick={() => handleGamePlay(index)}
            />
          ))}
          <RestartBtn handleRestart={handleRestart} />
        </div>
      </div>
      <Notebook clickedMushroom={clickedMushroom} />
      <div>
        {basket.map((mushroom, index) => (
          <img key={index} src={mushroom.src} alt={`mushroom-${index}`} className={`basket-mushroom-${index + 1}`} />
        ))}
      </div>
      <img className="basket" src={basketImg} alt="" />
    </div>
  )
}  

export default App



