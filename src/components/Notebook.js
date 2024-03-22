import React from "react"

const Notebook = ({ clickedMushroom }) => {

  return (
    <div className="notebook">
      <p style={{ textAlign: 'center', textDecoration: 'underline' }}>Notes:</p>
      {clickedMushroom !== null && clickedMushroom.src  && <img src={clickedMushroom.src} alt="Mushroom" className="notebook-image" />}
      <p>{clickedMushroom !== null ? clickedMushroom.message : ''}</p>
    </div>
  )
}

export default Notebook
