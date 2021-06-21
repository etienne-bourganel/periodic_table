import React from "react"
import "./index.css"

const InfoBoxLine = ({ props }) => {
  return (
    <div className='InfoBoxLine'>
      <div className={`${props.substring(0, 4)}`}>{props}</div>
    </div>
  )
}

export default InfoBoxLine
