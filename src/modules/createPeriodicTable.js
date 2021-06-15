const periodicTable = require("../data/data.json")

const createPeriodicTable = () => {
  let emptyTable = []

  for (let ypos = 1; ypos <= 9; ypos++) {
    for (let xpos = 1; xpos <= 18; xpos++) {
      emptyTable.push({ xpos, ypos })
    }
  }

  const tableTemplate = emptyTable.map(
    (cell) =>
      periodicTable.elements.find(
        (element) => element.xpos === cell.xpos && element.ypos === cell.ypos
      ) || { ...cell, data: null }
  )

  return tableTemplate
}

export default createPeriodicTable
