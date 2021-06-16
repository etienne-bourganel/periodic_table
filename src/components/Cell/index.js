import React from "react"
import "./index.css"

const Cell = ({ props }) => {
  const handleClick = () => {
    window.open(props.source, "_blank")
  }

  if (props.name) {
    return (
      <div className='Cell' onClick={handleClick}>
        <div className='ElementNumber'>{props.number}</div>
        <div className='Symbol'>{props.symbol}</div>
        <div className='ElementName'>{props.name}</div>
        <div className='AtomicMass'>{props.atomic_mass.toFixed(2)}</div>
      </div>
    )
  } else {
    return <div className='emptyCell'></div>
  }
}

export default Cell
