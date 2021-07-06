import React from "react"
import "./index.css"

const ElementCell = ({
  elementInfo,
  sendInfoToInfoBox,
  resetInfoToInfoBox,
  selectElementCell,
  selectedElement,
  stopHeavilyHighlightingPeriodOrGroup,
  groupOrPeriodToMildlyHighlight,
  groupOrPeriodToHeavilyHighlight,
}) => {
  const handleMouseOver = () => {
    // sendInfoToInfoBox(elementInfo)
  }

  const handleMouseOut = () => {
    // resetInfoToInfoBox()
  }

  const handleClick = () => {
    sendInfoToInfoBox(elementInfo)
    stopHeavilyHighlightingPeriodOrGroup()
    selectElementCell()
    // window.open(elementInfo.source, "_blank")
  }

  const categoryClass = elementInfo.category.substring(0, 7).trim()

  let mildlyHighlight = () => {
    return (
      groupOrPeriodToMildlyHighlight.xpos === elementInfo.xpos ||
      groupOrPeriodToMildlyHighlight.ypos === elementInfo.ypos ||
      (groupOrPeriodToMildlyHighlight.ypos === 6) & (elementInfo.ypos === 9) ||
      (groupOrPeriodToMildlyHighlight.ypos === 7) & (elementInfo.ypos === 10)
    )
  }

  let heavilyHighlight = () => {
    return (
      groupOrPeriodToHeavilyHighlight.xpos === elementInfo.xpos ||
      groupOrPeriodToHeavilyHighlight.ypos === elementInfo.ypos ||
      (groupOrPeriodToHeavilyHighlight.ypos === 6) & (elementInfo.ypos === 9) ||
      (groupOrPeriodToHeavilyHighlight.ypos === 7) & (elementInfo.ypos === 10)
    )
  }

  let selectionHighlight = () => {
    return (
      selectedElement.xpos === elementInfo.xpos &&
      selectedElement.ypos === elementInfo.ypos
    )
  }

  return (
    <div
      className={`Cell elmtCell ${categoryClass} ${
        mildlyHighlight()
          ? "mildlyHighlight"
          : heavilyHighlight()
          ? "heavilyHighlight"
          : ""
      } ${selectionHighlight() ? "selectionHighlight" : ""}`}
      onMouseLeave={handleMouseOut}
      onMouseEnter={handleMouseOver}
      onClick={handleClick}
    >
      <div className='elmtNumber'>{elementInfo.number}</div>
      <div className='elmtSymbol'>{elementInfo.symbol}</div>
      <div className='elmtName'>{elementInfo.name}</div>
      <div className='elmtInfo'>{elementInfo.atomic_mass.toFixed(2)}</div>
    </div>
  )
}

export default ElementCell
