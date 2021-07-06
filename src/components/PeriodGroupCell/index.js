import React from "react"
import "./index.css"

const PeriodGroupCell = ({
  elementInfo,
  sendInfoToInfoBox,
  resetInfoToInfoBox,
  mildlyHighlightPeriodOrGroup,
  stopMildlyHighlightingPeriodOrGroup,
  deselectElementCell,
  heavilyHighlightPeriodOrGroup,
}) => {
  const handleMouseOver = () => {
    mildlyHighlightPeriodOrGroup()
  }

  const handleMouseout = () => {
    stopMildlyHighlightingPeriodOrGroup()
  }

  const handleClick = () => {
    sendInfoToInfoBox()
    heavilyHighlightPeriodOrGroup()
    deselectElementCell()
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
