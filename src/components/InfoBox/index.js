import React from "react"
import "./index.css"
import InfoBoxItem from "../InfoBoxItem"

const InfoBox = ({ ElementInfoJSON }) => {
  const infoToShow = [
    "symbol",
    "name",
    "atomic_mass",
    "category",
    "density",
    "discovered_by",
    "phase",
    "summary",
  ]

  const titlefy = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
  }

  return (
    <div className='InfoBox'>
      {infoToShow.map((infoItem) => (
        <InfoBoxItem
          key={infoItem}
          infoItemTitle={titlefy(infoItem)}
          infoItem={ElementInfoJSON[infoItem]}
        />
      ))}
    </div>
  )
}

export default InfoBox
