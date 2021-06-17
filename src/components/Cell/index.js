import React from "react"
import "./index.css"
import InfoBox from "../InfoBox"

const Cell = ({ elementInfo }) => {
  const handleClick = () => {
    // window.open(elementInfo.source, "_blank")
    return infoToShow.forEach((infoItem) => {
      console.log(titlefy(infoItem) + elementInfo[infoItem])
    })
  }

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
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
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
  } else {
    return <div className='Cell emptyCell'></div>
  }
}

export default Cell
