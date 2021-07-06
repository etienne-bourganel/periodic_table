import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"
import ElementCell from "../ElementCell"

const Cell = ({
  elementInfo,
  updateInfoBox,
  selectedElement,
  sendSelectedElementCellToTable,
  sendMildlyHighlightPeriodOrGroupToTable,
  sendHeavilyHighlightPeriodOrGroupToTable,
  groupOrPeriodToMildlyHighlight,
  groupOrPeriodToHeavilyHighlight,
}) => {
  const coordinates = (({ xpos, ypos }) => ({ xpos, ypos }))(elementInfo)

  const sendInfoToInfoBox = () => {
    updateInfoBox(elementInfo)
  }

  const resetInfoToInfoBox = () => {
    updateInfoBox({})
  }

  const selectElementCell = () => {
    sendSelectedElementCellToTable(coordinates)
  }

  const deselectElementCell = () => {
    sendSelectedElementCellToTable({ xpos: 0, ypos: 0 })
  }

  const mildlyHighlightPeriodOrGroup = () => {
    sendMildlyHighlightPeriodOrGroupToTable(coordinates)
  }

  const stopMildlyHighlightingPeriodOrGroup = () => {
    sendMildlyHighlightPeriodOrGroupToTable({ xpos: 0, ypos: 0 })
  }

  const heavilyHighlightPeriodOrGroup = () => {
    sendHeavilyHighlightPeriodOrGroupToTable(coordinates)
  }

  const stopHeavilyHighlightingPeriodOrGroup = () => {
    sendHeavilyHighlightPeriodOrGroupToTable({ xpos: 0, ypos: 0 })
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
        selectElementCell={selectElementCell}
        selectedElement={selectedElement}
        stopHeavilyHighlightingPeriodOrGroup={
          stopHeavilyHighlightingPeriodOrGroup
        }
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
        stopMildlyHighlightingPeriodOrGroup={
          stopMildlyHighlightingPeriodOrGroup
        }
        deselectElementCell={deselectElementCell}
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
        stopMildlyHighlightingPeriodOrGroup={
          stopMildlyHighlightingPeriodOrGroup
        }
        deselectElementCell={deselectElementCell}
        heavilyHighlightPeriodOrGroup={heavilyHighlightPeriodOrGroup}
      />
    )
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
