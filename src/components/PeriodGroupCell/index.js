import React from "react"
import "./index.css"

const PeriodGroupCell = ({
  elementInfo,
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
