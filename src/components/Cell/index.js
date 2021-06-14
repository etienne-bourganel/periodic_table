import React from "react"
import "./index.css"

const Cell = ({ number, symbol, name }) => {
  return (
    <div className='Cell'>
      <div>{number}</div>
      <div>{symbol}</div>
      <div>{name}</div>
    </div>
  )
}

export default Cell
