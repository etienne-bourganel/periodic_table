const showElementInfo = (elementInfo) => {
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

  const titlefy = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1) + ": ").replace("_", " ")
  }
  infoToShow.forEach((infoItem) => {
    console.log(titlefy(infoItem) + elementInfo[infoItem])
  })
  console.log("\n")
}

export default showElementInfo
