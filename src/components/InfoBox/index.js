import React from "react"
import "./index.css"
import InfoBoxItem from "../InfoBoxItem"
import WikipediaLink from "../WikipediaLink"

const InfoBox = ({ itemData }) => {
  const elementInfoToShow = [
    "name",
    "symbol",
    "category",
    "discovered_by",
    "phase",
    "atomic_mass",
    "density",
    "summary",
  ]

  const periodOrGroupInfoToShow = ["name", "summary"]

  const titlefy = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
  }

  const isAnElement = () => {
    return itemData.symbol
  }

  const isAPeriodOrGroup = () => {
    return itemData.name
  }

  if (isAnElement()) {
    return (
      <div className='infoContainer'>
        <div className='InfoBox'>
          {elementInfoToShow.map((infoItem) => (
            <InfoBoxItem
              key={infoItem}
              infoItemTitle={titlefy(infoItem)}
              infoItem={itemData[infoItem]}
              allData={itemData}
            />
          ))}
        </div>
        <WikipediaLink itemData={itemData} />
      </div>
    )
  } else if (isAPeriodOrGroup()) {
    return (
      <div className='infoContainer'>
        <div className='InfoBox PeriodOrGroup'>
          {periodOrGroupInfoToShow.map((infoItem) => (
            <InfoBoxItem
              key={infoItem}
              infoItemTitle={titlefy(infoItem)}
              infoItem={itemData[infoItem]}
              allData={itemData}
            />
          ))}
        </div>
        <WikipediaLink itemData={itemData} />
      </div>
    )
  }
  return null
}

export default InfoBox
