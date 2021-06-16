import React from "react"
import "./index.css"

const InfoBox = ({ props }) => {
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

  const titlefy = (item) => {
    // Ex: titlefy(atomic_mass) => "Atomic Mass: "
  }

  const createInfoDivs = ({ props }) => {
    infoToShow.forEach((infoItem) => {
      return (
        <div>
          {props}.{infoItem}
        </div>
      )
    })
  }

  return <div className='InfoBox'>{createInfoDivs({ props })}</div>
}

export default InfoBox
