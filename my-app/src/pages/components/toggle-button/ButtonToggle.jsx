import React, { useState } from 'react'
import "./toggle-buttons.css"

const ToggleButton = ({btn1, btn2, setParametr}) => {
  const [choiseLanguage, setChoiseLanguage] = useState(0); //0 - ua, 1 - ru 
  const changeValue = (value) => {
    setChoiseLanguage(value)
    setParametr(value)
  }
  return (
    <div className="toggle-buttons">
        <button className={choiseLanguage === 0 ? "btn-active" : ""} onClick={() => changeValue(0)}>{btn1}</button>
        <button className={choiseLanguage === 1 ? "btn-active" : ""} onClick={() => changeValue(1)}>{btn2}</button>
        {/* <button className={choiseLanguage === 0 ? "btn-active" : ""} onClick={() => setChoiseLanguage(0)}>{btn1}</button>
        <button className={choiseLanguage === 1 ? "btn-active" : ""} onClick={() => setChoiseLanguage(1)}>{btn2}</button> */}
    </div>
  )
}

export default ToggleButton