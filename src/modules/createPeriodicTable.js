const createPeriodicTable = () => {
  let table = []

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 18; j++) {
      table.push([i, j])
    }
  }

  return table
}

export default createPeriodicTable
