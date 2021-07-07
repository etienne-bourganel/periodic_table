import React from "react"
import "./index.css"

const WikipediaLink = ({ itemData }) => {
  const handleClick = () => {
    window.open(itemData.source, "_blank")
  }
  return (
    <div className='WikiLink' onClick={handleClick}>
      Wikipedia article
    </div>
  )
}

export default WikipediaLink
