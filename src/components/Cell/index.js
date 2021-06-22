import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"
import ElementCell from "../CellElement"

const Cell = ({ elementInfo, updateInfoBox }) => {
  const sendInfoToInfoBox = () => {
    updateInfoBox(elementInfo)
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
    return <PeriodGroupCell props={elementInfo.xpos} />
  } else if (CellIsPeriodNr()) {
    return <PeriodGroupCell props={elementInfo.ypos} />
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
