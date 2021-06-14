import React from "react"

import "./index.css"

const Cell = ({ period, group }) => {
  return (
    <div className='Cell'>
      <div>g-{group}</div>
      <div>p-{period}</div>
    </div>
  )
}

export default Cell
