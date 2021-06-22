import React from "react"
import "./index.css"

const ElementCell = ({ elementInfo, sendInfoToInfoBox }) => {
  const handleClick = () => {
    sendInfoToInfoBox(elementInfo)
  }

  const categoryClass = elementInfo.category.substring(0, 7).trim()

  return (
    <div className={`Cell elmtCell ${categoryClass}`} onClick={handleClick}>
      <div className='elmtNumber'>{elementInfo.number}</div>
      <div className='elmtSymbol'>{elementInfo.symbol}</div>
      <div className='elmtName'>{elementInfo.name}</div>
      <div className='elmtInfo'>{elementInfo.atomic_mass.toFixed(2)}</div>
    </div>
  )
}

export default ElementCell
