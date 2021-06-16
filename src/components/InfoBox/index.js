import React from "react"
import "./index.css"

const InfoBox = () => {
  const infoToShow = [
    "name",
    "appearance",
    "atomic_mass",
    "boil",
    "category",
    "density",
    "discovered_by",
    "named_by",
    "phase",
    "summary",
  ]

  const titlefy = (str) => {
    return str.replace("_", " ").charAt(0).toUpperCase() + str.slice(1) + " : "
  }

  return (
    <div>
      <div className='InfoBox'>
        {infoToShow.map((infoItem) => (
          <InfoBoxLine key={infoItem} infoTitle={titlefy(infoItem)} />
        ))}
      </div>
    </div>
  )
}

export default InfoBox
