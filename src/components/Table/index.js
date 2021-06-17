import React from "react"
import Cell from "../Cell"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()

  return (
    <div>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
          />
        ))}
      </div>
    </div>
  )
}

export default Table
