import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"
import ElementCell from "../ElementCell"

const Cell = ({
  elementInfo,
  updateInfoBox,
  sendMildlyHighlightPeriodOrGroupToTable,
  sendHeavilyHighlightPeriodOrGroupToTable,
  groupOrPeriodToMildlyHighlight,
  groupOrPeriodToHeavilyHighlight,
}) => {
  const periodOrGroupCoordinates = (({ xpos, ypos }) => ({ xpos, ypos }))(
    elementInfo
  )

  const sendInfoToInfoBox = () => {
    updateInfoBox(elementInfo)
  }

  const resetInfoToInfoBox = () => {
    updateInfoBox({})
  }

  const mildlyHighlightPeriodOrGroup = () => {
    sendMildlyHighlightPeriodOrGroupToTable(periodOrGroupCoordinates)
  }

  const stopHighlightingPeriodOrGroup = () => {
    sendMildlyHighlightPeriodOrGroupToTable({ xpos: 0, ypos: 0 })
  }

  const heavilyHighlightPeriodOrGroup = () => {
    sendHeavilyHighlightPeriodOrGroupToTable(periodOrGroupCoordinates)
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

  if (elementInfo.symbol) {
    return (
      <ElementCell
        elementInfo={elementInfo}
        sendInfoToInfoBox={sendInfoToInfoBox}
        resetInfoToInfoBox={resetInfoToInfoBox}
        groupOrPeriodToMildlyHighlight={groupOrPeriodToMildlyHighlight}
        groupOrPeriodToHeavilyHighlight={groupOrPeriodToHeavilyHighlight}
      />
    )
  } else if (CellIsGroupNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendInfoToInfoBox={sendInfoToInfoBox}
        resetInfoToInfoBox={resetInfoToInfoBox}
        mildlyHighlightPeriodOrGroup={mildlyHighlightPeriodOrGroup}
        stopHighlightingPeriodOrGroup={stopHighlightingPeriodOrGroup}
        heavilyHighlightPeriodOrGroup={heavilyHighlightPeriodOrGroup}
      />
    )
  } else if (CellIsPeriodNr()) {
    return (
      <PeriodGroupCell
        elementInfo={elementInfo}
        sendInfoToInfoBox={sendInfoToInfoBox}
        resetInfoToInfoBox={resetInfoToInfoBox}
        mildlyHighlightPeriodOrGroup={mildlyHighlightPeriodOrGroup}
        stopHighlightingPeriodOrGroup={stopHighlightingPeriodOrGroup}
        heavilyHighlightPeriodOrGroup={heavilyHighlightPeriodOrGroup}
      />
    )
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
