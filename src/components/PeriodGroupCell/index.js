import React from "react"
import "./index.css"
const periods_groups = require("../../data/periods_groups.json")

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
    window.open(periods_groups.periods_groups.source, "_blank")
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
