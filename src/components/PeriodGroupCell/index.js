import React from "react"
import "./index.css"

const PeriodGroupCell = ({
  elementInfo,
  sendInfoToInfoBox,
  resetInfoToInfoBox,
  sendPeriodOrGroupCoordinates,
  resetPeriodOrGroupCoordinates,
}) => {
  const handleMouseOver = () => {
    sendPeriodOrGroupCoordinates()
    sendInfoToInfoBox()
  }

  const handleMouseout = () => {
    resetPeriodOrGroupCoordinates()
    resetInfoToInfoBox()
  }

  const handleClick = () => {
    window.open(elementInfo.source, "_blank")
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
