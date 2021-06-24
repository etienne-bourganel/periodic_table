import React, { useState } from "react"
import Cell from "../Cell"
import InfoBox from "../InfoBox"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()

  const updateInfoBox = (infoObject) => {
    console.log(InfoBoxData)
    setInfoBoxData(infoObject)
    console.log(InfoBoxData)
  }

  const [InfoBoxData, setInfoBoxData] = useState({})

  const [PeriodOrGroupToHighlight, setPeriodOrGroupToHighlight] = useState({})

  const sendPeriodOrGroupCoordinatesToTable = (periodOrGroupCoordinates) => {
    setPeriodOrGroupToHighlight(periodOrGroupCoordinates)
  }

  return (
    <div className='TableAndInfoBoxContainer'>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
            updateInfoBox={updateInfoBox}
            sendPeriodOrGroupCoordinatesToTable={
              sendPeriodOrGroupCoordinatesToTable
            }
            PeriodOrGroupToHighlight={PeriodOrGroupToHighlight}
          />
        ))}
      </div>
      <div>
        <InfoBox infoBoxData={InfoBoxData} />
      </div>
    </div>
  )
}

export default Table
