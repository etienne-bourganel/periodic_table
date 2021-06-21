import React, { useState } from "react"
import Cell from "../Cell"
import InfoBoxLine from "../InfoBoxLine"
import "./index.css"
import createPeriodicTable from "../../modules/createPeriodicTable"
// import createElementInfoArray from "../../modules/createElementInfoArray"

const Table = () => {
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
  const tableTemplate = createPeriodicTable()

  // const updateInfoBox = (elementInfo) => {
  //   const data = createElementInfoArray(elementInfo)
  //   setInfoBoxData(data)
  //   console.log(data)
  // }

  const objectModel = {
    name: "-",
    appearance: "-",
    atomic_mass: "-",
    boil: "-",
    category: "-",
    density: "-",
    discovered_by: "-",
    phase: "-",
    summary: "-",
  }
  const resetInfoBox = () => {
    setInfoBoxData(Object.create(objectModel))
  }

  const updateInfoBox = (elementInfo) => {
    setInfoBoxData(elementInfo)
    console.log(elementInfo)
  }

  const [InfoBoxData, setInfoBoxData] = useState(Object.create(objectModel))

  return (
    <div className='TableAndInfoBoxContainer'>
      <div className='Table'>
        {tableTemplate.map((cellInfo) => (
          <Cell
            key={`x${cellInfo.xpos}y${cellInfo.ypos}`}
            elementInfo={cellInfo}
            updateInfoBox={updateInfoBox}
            resetInfoBox={resetInfoBox}
          />
        ))}
      </div>
      {/* <div className='InfoBox'>
        {InfoBoxData.map((InfoLine) => (
          <InfoBoxLine key={InfoLine} props={InfoLine} />
        ))}
      </div> */}
      <div className='InfoBox'>
        {infoToShow.map((infoItem) => (
          <InfoBoxLine key={InfoBoxData.name} props={InfoBoxData[infoItem]} />
        ))}
      </div>
    </div>
  )
}

export default Table
