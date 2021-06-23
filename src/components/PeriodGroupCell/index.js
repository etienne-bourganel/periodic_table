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

  return (
    <div
      className='Cell PeriodGroupCell'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseout}
    >
      {elementInfo.xpos || elementInfo.ypos}
    </div>
  )
}

export default PeriodGroupCell
