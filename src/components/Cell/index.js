import React from "react"

import "./index.css"

const Cell = ({ props }) => {
  if (props.name) {
    return (
      <div className='Cell'>
        <div>{props.symbol}</div>
        <div>{props.name}</div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Cell
