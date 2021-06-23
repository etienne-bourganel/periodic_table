import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"
import ElementCell from "../CellElement"

const Cell = ({ elementInfo, updateInfoBox, sendPeriodOrGroupNrToTable }) => {
  const sendInfoToInfoBox = () => {
    updateInfoBox(elementInfo)
  }

  const sendPeriodOrGroupNr = () => {
    sendPeriodOrGroupNrToTable(elementInfo)
  }

  const CellIsGroupNr = () => {
    return (
      elementInfo.ypos === 0 && elementInfo.xpos > 0 && elementInfo.xpos < 19
    )
  }

  const CellIsPeriodNr = () => {
    return (
      elementInfo.xpos === 0 && elementInfo.ypos > 0 && elementInfo.ypos < 8
    )
  }

  if (elementInfo.name) {
    return (
      <ElementCell
        elementInfo={elementInfo}
        sendInfoToInfoBox={sendInfoToInfoBox}
      />
    )
  } else if (CellIsGroupNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendPeriodOrGroupNr={sendPeriodOrGroupNr}
      />
    )
  } else if (CellIsPeriodNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendPeriodOrGroupNr={sendPeriodOrGroupNr}
      />
    )
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
