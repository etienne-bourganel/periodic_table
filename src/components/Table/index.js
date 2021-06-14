import React from "react"
import "./index.css"
import Cell from "../Cell"

const Table = ({ data }) => {
  return (
    <div>
      <div className='Table'>
        {data.map((item) => (
          <Cell number={item.number} symbol={item.symbol} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default Table
