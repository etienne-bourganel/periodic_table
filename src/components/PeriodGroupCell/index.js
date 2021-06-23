import React from "react"
import "./index.css"

const PeriodGroupCell = ({
  elementInfo,
  sendPeriodOrGroupCoordinates,
  resetPeriodOrGroupCoordinates,
}) => {
  const handleMouseEnter = () => {
    sendPeriodOrGroupCoordinates()
  }

  const handleMouseout = () => {
    resetPeriodOrGroupCoordinates()
  }

  return (
    <div
      className='Cell PeriodGroupCell'
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseout}
    >
      {elementInfo.xpos || elementInfo.ypos}
    </div>
  )
}

export default PeriodGroupCell
