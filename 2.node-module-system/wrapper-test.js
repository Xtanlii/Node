
const wrapperExplorer = require('./wrapper.js')

console.log(`in wrapper test.js file`)

console.log("__filename in wrapper test",__filename);
console.log("__dirname in wrapper test",__dirname);

wrapperExplorer.greet('Stanley')