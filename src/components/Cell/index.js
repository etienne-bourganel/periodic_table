import React from "react"
import "./index.css"
import PeriodGroupCell from "../PeriodGroupCell"

const Cell = ({ elementInfo, updateInfoBox }) => {
  const handleClick = () => {
    updateInfoBox(elementInfo)
  }

  const CellIsGroupNr = () => {
    return (
      elementInfo.ypos === 0 && elementInfo.xpos > 0 && elementInfo.xpos < 19
    )
  }

  const CellIsPeriodNr = () => {
    return (
      elementInfo.xpos === 0 && elementInfo.ypos > 0 && elementInfo.ypos < 8
    )
  }

  if (elementInfo.name) {
    const categoryClass = elementInfo.category.substring(0, 7).trim()
    return (
      <div className={`Cell elmtCell ${categoryClass}`} onClick={handleClick}>
        <div className='elmtNumber'>{elementInfo.number}</div>
        <div className='elmtSymbol'>{elementInfo.symbol}</div>
        <div className='elmtName'>{elementInfo.name}</div>
        <div className='elmtInfo'>{elementInfo.atomic_mass.toFixed(2)}</div>
      </div>
    )
  } else if (CellIsGroupNr()) {
    return <PeriodGroupCell props={elementInfo.xpos} />
  } else if (CellIsPeriodNr()) {
    return <PeriodGroupCell props={elementInfo.ypos} />
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
