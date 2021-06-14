const createPeriodicTable = () => {
  let table = []

  for (let period = 1; period <= 9; period++) {
    for (let group = 1; group <= 18; group++) {
      table.push([period, group])
    }
  }

  return table
}

export default createPeriodicTable
