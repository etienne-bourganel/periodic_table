const createElementInfoArray = (elementInfo) => {
  const infoToShow = [
    "name",
    "appearance",
    "atomic_mass",
    "boil",
    "category",
    "density",
    "discovered_by",
    "phase",
    "summary",
  ]

  let elementInfoArray = []
  const titlefy = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
  }
  infoToShow.forEach((infoItem) => {
    const infoLine = titlefy(infoItem) + elementInfo[infoItem]
    elementInfoArray.push(infoLine)
  })

  return elementInfoArray
}

export default createElementInfoArray
