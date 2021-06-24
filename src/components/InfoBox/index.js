import React from "react"
import "./index.css"
import InfoBoxItem from "../InfoBoxItem"

const InfoBox = ({ infoBoxData }) => {
  const elementInfoToShow = [
    "symbol",
    "name",
    "atomic_mass",
    "category",
    "density",
    "discovered_by",
    "phase",
    "summary",
  ]

  const periodOrGroupInfoToShow = ["name", "summary"]

  const titlefy = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
  }

  const isAnElement = () => {
    return infoBoxData.symbol
  }

  const isAPeriodOrGroup = () => {
    return infoBoxData.name
  }

  if (isAnElement()) {
    return (
      <div className='InfoBox'>
        {elementInfoToShow.map((infoItem) => (
          <InfoBoxItem
            key={infoItem}
            infoItemTitle={titlefy(infoItem)}
            infoItem={infoBoxData[infoItem]}
          />
        ))}
      </div>
    )
  } else if (isAPeriodOrGroup()) {
    return (
      <div className='InfoBox PeriodOrGroup'>
        {periodOrGroupInfoToShow.map((infoItem) => (
          <InfoBoxItem
            key={infoItem}
            infoItemTitle={titlefy(infoItem)}
            infoItem={infoBoxData[infoItem]}
          />
        ))}
      </div>
    )
  }
  return null
}

export default InfoBox
