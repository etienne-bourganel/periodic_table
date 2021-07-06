import React from "react"
import "./index.css"

const InfoBoxItem = ({ infoItemTitle, infoItem, allData }) => {
  const itemTitleClass = infoItemTitle.substring(0, 4)

  // const handleClick = () => {
  //   window.open(allData.source, "_blank")
  // }

  return (
    <div className={`InfoBoxItem ${itemTitleClass} `}>
      <span className='InfoTitle'>
        {infoItemTitle === "Name: " ? "" : infoItemTitle}
      </span>
      <span className='InfoItem'>{infoItem}</span>
    </div>
  )
}

export default InfoBoxItem
