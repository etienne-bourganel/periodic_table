import React from "react"
import "./index.css"

const InfoBoxItem = ({ infoItemTitle, infoItem }) => {
  return (
    <div className={infoItemTitle.substring[(0, 3)]}>
      <span>{infoItemTitle}</span>
      <span>{infoItem}</span>
    </div>
  )
}

export default InfoBoxItem
