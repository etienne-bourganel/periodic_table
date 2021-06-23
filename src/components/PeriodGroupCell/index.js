import React from "react"
import "./index.css"

const PeriodGroupCell = ({ elementInfo, sendPeriodOrGroupNr }) => {
  const handleMouseEnter = () => {
    sendPeriodOrGroupNr(elementInfo)
  }

  return (
    <div className='Cell PeriodGroupCell' onMouseEnter={handleMouseEnter}>
      {elementInfo.xpos || elementInfo.ypos}
    </div>
  )
}

export default PeriodGroupCell
