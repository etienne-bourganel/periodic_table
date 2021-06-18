import React from "react"
import "./index.css"

const InfoBoxLine = ({ props }) => {
  return (
    <div classname={`${props.substring(0, 4)}`}>
      <div className='InfoBoxLine'>{props}</div>
    </div>
  )
}

export default InfoBoxLine
