import React from "react"
import Cell from "../Cell"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"

const Table = () => {
  const tableTemplate = createPeriodicTable()
  const doSomething = (elementInfo) => {
    const infoToShow = [
      "name",
      "appearance",
      "atomic_mass",
      "boil",
      "category",
      "density",
      "discovered_by",
      "phase",
      "summary",
    ]

    const titlefy = (str) => {
      return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace(
        "_",
        " "
      )
    }
    infoToShow.forEach((infoItem) => {
      console.log(titlefy(infoItem) + elementInfo[infoItem])
    })
    console.log("\n")
  }
  return (
    <div>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
            onClickFunc={doSomething}
          />
        ))}
      </div>
    </div>
  )
}

export default Table
