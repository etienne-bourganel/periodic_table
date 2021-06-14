import React from "react"
import createPeriodicTable from "../../modules/createPeriodicTable"
import Cell from "../Cell"
import "./index.css"

const Table = () => {
  const periodicTable = createPeriodicTable()

  return (
    <div>
      <div className='Table'>
        {periodicTable.map((item) => (
          <Cell
            key={`${item[0]}- ${item[1]}`}
            period={item[0]}
            group={item[1]}
          />
        ))}
      </div>
    </div>
  )
}

export default Table
