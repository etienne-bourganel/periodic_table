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
  }

  const handleMouseout = () => {
    resetPeriodOrGroupCoordinates()
  }

  const handleClick = () => {
    sendInfoToInfoBox()
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
