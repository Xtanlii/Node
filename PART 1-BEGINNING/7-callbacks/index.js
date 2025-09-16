const fs = require('fs');


function person(name, callback) {
  console.log(`hello ${name}`)
  callback()
}

function address() {
  console.log('Nigeria')
}


person('stanley', address)

fs.readFile('input.txt', 'utf8', (err, data) => {
  if(err){
    console.log('Error reading file:', err.message)
    return
  }
  console.log(data);
})