import React from "react"
import "./index.css"

const Cell = ({ elementInfo, showElementInfo }) => {
  const handleClick = () => {
    // window.open(elementInfo.source, "_blank")
    showElementInfo(elementInfo)
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
  } else if (
    elementInfo.ypos === 0 &&
    elementInfo.xpos > 0 &&
    elementInfo.xpos < 19
  ) {
    return <div className='Cell periodOrGroupCell'>{elementInfo.xpos}</div>
  } else if (
    elementInfo.xpos === 0 &&
    elementInfo.ypos > 0 &&
    elementInfo.ypos < 8
  ) {
    return <div className='Cell periodOrGroupCell'>{elementInfo.ypos}</div>
  } else return <div className='Cell emptyCell'></div>
}

export default Cell
