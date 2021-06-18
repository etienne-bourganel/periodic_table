import React, { useState } from "react"
import Cell from "../Cell"
import InfoBoxLine from "../InfoBoxLine"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"
import createElementInfoArray from "../../modules/createElementInfoArray"

const Table = () => {
  const tableTemplate = createPeriodicTable()

  const updateInfoBox = (elementInfo) => {
    const data = createElementInfoArray(elementInfo)
    setInfoBoxData(data)
    console.log(data)
  }

  const [InfoBoxData, setInfoBoxData] = useState([])

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
      <div className='InfoBox'>
        {InfoBoxData.map((InfoLine) => (
          <InfoBoxLine key={InfoLine} props={InfoLine} />
        ))}
      </div>
    </div>
  )
}

export default Table
