// These are x and y for each row of the table
const initialValues = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ]
  
  // This holds the html table
  const table = document.getElementById('table')
  
  // With this loop we go through all the rows of the initial values and calculate AND, OR, NAND and NOR
  for (let i = 0; i < initialValues.length; i++) {
    const x = initialValues[i][0]
    const y = initialValues[i][1]
  
    // We add this HTML to the table on every iteration
    // Use Number() to transform from true or false to 1 or 0
    table.innerHTML += `
      <tr>
        <td>${x}</td>
        <td>${y}</td>
        <td>${Number(x && y)}</td>
        <td>${Number(x || y)}</td>
        <td>${Number(!(x && y))}</td>
        <td>${Number(!(x || y))}</td>
        <td>${Number((x && !y) || (!x && y))}</td>
      </tr>
    `
  }
  