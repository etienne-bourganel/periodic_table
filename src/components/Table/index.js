import React, { useState } from "react"
import Cell from "../Cell"
import InfoBox from "../InfoBox"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()

  const updateInfoBox = (elementInfo) => {
    setInfoBoxData(elementInfo)
  }

  const [InfoBoxData, setInfoBoxData] = useState({})

  return (
    <div className='TableAndInfoBoxContainer'>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
            updateInfoBox={updateInfoBox}
          />
        ))}
      </div>
      <div>
        <InfoBox ElementInfoJSON={InfoBoxData} />
      </div>
    </div>
  )
}

export default Table
