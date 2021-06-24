const periodicTable = require("../data/data.json")
const periods_groups = require("../data/periods_groups.json")

const createPeriodicTable = () => {
  let emptyTable = []

  for (let ypos = 0; ypos <= 10; ypos++) {
    for (let xpos = 0; xpos <= 19; xpos++) {
      emptyTable.push({ xpos, ypos })
    }
  }

  const tableTemplate = emptyTable.map(
    (cell) =>
      periodicTable.elements.find(
        (element) => element.xpos === cell.xpos && element.ypos === cell.ypos
      ) || { ...cell, data: null }
  )

  const newTableTemplate = tableTemplate.map(
    (cell) =>
      periods_groups.periods_groups.find(
        (periodOrGroup) =>
          periodOrGroup.xpos === cell.xpos && periodOrGroup.ypos === cell.ypos
      ) || { ...cell, data: null }
  )

  return newTableTemplate
}

export default createPeriodicTable
