import React from "react"
import Cell from "../Cell"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()
  console.log(tableTemplate)

  return (
    <div>
      <div className='Table'>
        {tableTemplate.map((element) => (
          <Cell key={element.number} props={element} />
        ))}
      </div>
    </div>
  )
}

export default Table
