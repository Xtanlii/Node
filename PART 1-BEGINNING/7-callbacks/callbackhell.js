const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err.message)
    return
  }
  const modifyFileData = data.toUpperCase()
  fs.writeFile('output.txt', modifyFileData, (err) => {
    if (err) {
      console.log('Error writing file:', err.message)
      return
    }
    console.log('File written');

    fs.readFile('output.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err.message)
        return
      }
      console.log(data);
    })
  })
})