import React from "react"
import "./index.css"

const PeriodGroupCell = ({ elementInfo, sendPeriodOrGroupCoordinates }) => {
  const handleMouseEnter = () => {
    sendPeriodOrGroupCoordinates(elementInfo)
  }

  return (
    <div className='Cell PeriodGroupCell' onMouseEnter={handleMouseEnter}>
      {elementInfo.xpos || elementInfo.ypos}
    </div>
  )
}

export default PeriodGroupCell
