import React from "react"
import "./index.css"

const Cell = ({ props }) => {
  const handleClick = () => {
    window.open(props.source, "_blank")
  }

  if (props.name) {
    const categoryClass = props.category.substring(0, 7).trim()
    return (
      <div className={`Cell elmtCell ${categoryClass}`} onClick={handleClick}>
        <div className='elmtNumber'>{props.number}</div>
        <div className='elmtSymbol'>{props.symbol}</div>
        <div className='elmtName'>{props.name}</div>
        <div className='elmtInfo'>{props.atomic_mass.toFixed(2)}</div>
      </div>
    )
  } else {
    return <div className='Cell emptyCell'></div>
  }
}

export default Cell
