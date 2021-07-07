import React, { useState } from "react"
import Cell from "../Cell"
import InfoBox from "../InfoBox"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()

  const updateInfoBox = (infoObject) => {
    setInfoBoxData(infoObject)
  }

  const [InfoBoxData, setInfoBoxData] = useState({})

  const [selectedElement, setSelectedElement] = useState({})

  const sendSelectedElementCellToTable = (coordinates) => {
    setSelectedElement(coordinates)
  }

  const [
    MildHighlightPeriodOrGroupCoordinates,
    setMildHighlightPeriodOrGroupCoordinates,
  ] = useState({})

  const [
    HeavyHighlightPeriodOrGroupCoordinates,
    setHeavilyHighlightPeriodOrGroupCoordinates,
  ] = useState({})

  const sendMildlyHighlightPeriodOrGroupToTable = (coordinates) => {
    setMildHighlightPeriodOrGroupCoordinates(coordinates)
  }

  const sendHeavilyHighlightPeriodOrGroupToTable = (coordinates) => {
    setHeavilyHighlightPeriodOrGroupCoordinates(coordinates)
  }

  return (
    <div className='TableAndInfoBoxContainer'>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
            updateInfoBox={updateInfoBox}
            selectedElement={selectedElement}
            sendSelectedElementCellToTable={sendSelectedElementCellToTable}
            sendMildlyHighlightPeriodOrGroupToTable={
              sendMildlyHighlightPeriodOrGroupToTable
            }
            sendHeavilyHighlightPeriodOrGroupToTable={
              sendHeavilyHighlightPeriodOrGroupToTable
            }
            groupOrPeriodToMildlyHighlight={
              MildHighlightPeriodOrGroupCoordinates
            }
            groupOrPeriodToHeavilyHighlight={
              HeavyHighlightPeriodOrGroupCoordinates
            }
          />
        ))}
      </div>
      <div>
        <InfoBox itemData={InfoBoxData} />
      </div>
    </div>
  )
}

export default Table
