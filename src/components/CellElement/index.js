import React from "react"
import "./index.css"

const ElementCell = ({
  elementInfo,
  sendInfoToInfoBox,
  PeriodOrGroupToHighlight,
}) => {
  const handleClick = () => {
    sendInfoToInfoBox(elementInfo)
  }

  const categoryClass = elementInfo.category.substring(0, 7).trim()

  let highlight = () => {
    if (
      PeriodOrGroupToHighlight.xpos === elementInfo.xpos ||
      PeriodOrGroupToHighlight.ypos === elementInfo.ypos ||
      (PeriodOrGroupToHighlight.ypos === 6) & (elementInfo.ypos === 9) ||
      (PeriodOrGroupToHighlight.ypos === 7) & (elementInfo.ypos === 10)
    ) {
      return true
    }
  }

  return (
    <div
      className={`Cell elmtCell ${categoryClass} ${
        highlight() ? "highlight" : ""
      }`}
      onClick={handleClick}
    >
      <div className='elmtNumber'>{elementInfo.number}</div>
      <div className='elmtSymbol'>{elementInfo.symbol}</div>
      <div className='elmtName'>{elementInfo.name}</div>
      <div className='elmtInfo'>{elementInfo.atomic_mass.toFixed(2)}</div>
    </div>
  )
}

export default ElementCell
