import React, { useState, useEffect } from "react"

const Mushrooms = ({ src, onClick, className }) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (src !== "") {
      setClicked(false)
    }
  }, [src])

  const handleClick = () => {
    setClicked(true)
    onClick()
  }

  return (
    <>
      {clicked ? null : (
        <img className={`shroom ${className}`} src={src} onClick={handleClick} alt="mushroom" />
      )}
    </>
  )
}

export default Mushrooms
