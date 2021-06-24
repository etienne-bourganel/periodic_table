import React from "react"
import "./index.css"

const ElementCell = ({
  elementInfo,
  sendInfoToInfoBox,
  resetInfoToInfoBox,
  PeriodOrGroupToHighlight,
}) => {
  const handleMouseOver = () => {
    sendInfoToInfoBox(elementInfo)
  }

  const handleMouseOut = () => {
    resetInfoToInfoBox()
  }

  const handleClick = () => {
    window.open(elementInfo.source, "_blank")
  }

  const categoryClass = elementInfo.category.substring(0, 7).trim()

  let highlight = () => {
    return (
      PeriodOrGroupToHighlight.xpos === elementInfo.xpos ||
      PeriodOrGroupToHighlight.ypos === elementInfo.ypos ||
      (PeriodOrGroupToHighlight.ypos === 6) & (elementInfo.ypos === 9) ||
      (PeriodOrGroupToHighlight.ypos === 7) & (elementInfo.ypos === 10)
    )
  }

  return (
    <div
      className={`Cell elmtCell ${categoryClass} ${
        highlight() ? "highlight" : ""
      }`}
      onMouseLeave={handleMouseOut}
      onMouseEnter={handleMouseOver}
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