import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"
import ElementCell from "../ElementCell"

const Cell = ({
  elementInfo,
  updateInfoBox,
  sendPeriodOrGroupCoordinatesToTable,
  PeriodOrGroupToHighlight,
}) => {
  const coordinates = (({ xpos, ypos }) => ({ xpos, ypos }))(elementInfo)

  const sendInfoToInfoBox = () => {
    updateInfoBox(elementInfo)
  }

  const resetInfoToInfoBox = () => {
    updateInfoBox({})
  }

  const sendPeriodOrGroupCoordinates = () => {
    sendPeriodOrGroupCoordinatesToTable(coordinates)
  }

  const resetPeriodOrGroupCoordinates = () => {
    sendPeriodOrGroupCoordinatesToTable({ xpos: 0, ypos: 0 })
  }

  const CellIsGroupNr = () => {
    return (
      elementInfo.ypos === 0 && elementInfo.xpos > 0 && elementInfo.xpos < 19
    )
  }

  const CellIsPeriodNr = () => {
    return (
      elementInfo.xpos === 0 && elementInfo.ypos > 0 && elementInfo.ypos < 9
    )
  }

  if (elementInfo.name) {
    return (
      <ElementCell
        elementInfo={elementInfo}
        sendInfoToInfoBox={sendInfoToInfoBox}
        resetInfoToInfoBox={resetInfoToInfoBox}
        PeriodOrGroupToHighlight={PeriodOrGroupToHighlight}
      />
    )
  } else if (CellIsGroupNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendPeriodOrGroupCoordinates={sendPeriodOrGroupCoordinates}
        resetPeriodOrGroupCoordinates={resetPeriodOrGroupCoordinates}
      />
    )
  } else if (CellIsPeriodNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendPeriodOrGroupCoordinates={sendPeriodOrGroupCoordinates}
        resetPeriodOrGroupCoordinates={resetPeriodOrGroupCoordinates}
      />
    )
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
