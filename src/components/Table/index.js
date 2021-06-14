import React from "react"
import createPeriodicTable from "../../modules/createPeriodicTable"
import "./index.css"

const Table = () => {
  const periodicTable = createPeriodicTable()

  return (
    <div>
      <div className='Table'>
        {periodicTable.map((item) => (
          <div key={item}>{`[ ${item[0]} , ${item[1]} ]`}</div>
        ))}
      </div>
    </div>
  )
}

export default Table

// {
//   data.map((item) => (
//     <Cell
//       key={item.number}
//       number={item.number}
//       symbol={item.symbol}
//       name={item.name}
//     />
//   ))
// }
