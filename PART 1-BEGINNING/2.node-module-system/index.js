//module.export

const math = require('./math.js');


try {
  console.log('trying to divide by zero')
  let result = math(10,0);
  console.log(result)
} catch(error) {
  console.log('Caught an error', error.message)
}