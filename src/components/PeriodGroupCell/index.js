import React from "react"
import "./index.css"

const PeriodGroupCell = ({
  elementInfo,
  sendInfoToInfoBox,
  resetInfoToInfoBox,
  mildlyHighlightPeriodOrGroup,
  stopHighlightingPeriodOrGroup,
  heavilyHighlightPeriodOrGroup,
}) => {
  const handleMouseOver = () => {
    mildlyHighlightPeriodOrGroup()
  }

  const handleMouseout = () => {
    stopHighlightingPeriodOrGroup()
  }

  const handleClick = () => {
    sendInfoToInfoBox()
    heavilyHighlightPeriodOrGroup()
  }

  return (
    <div
      className='Cell PeriodGroupCell'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseout}
      onClick={handleClick}
    >
      {elementInfo.xpos || elementInfo.ypos}
    </div>
  )
}

export default PeriodGroupCell
