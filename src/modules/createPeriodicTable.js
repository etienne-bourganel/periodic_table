const periodicTable = require("../data/data.json")

const createPeriodicTable = () => {
  let emptyTable = []

  for (let ypos = 0; ypos <= 10; ypos++) {
    for (let xpos = 0; xpos <= 18; xpos++) {
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
