const fs = require('fs');
const path = require('path');

const dataFolder= path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
}

const filePath = path.join(dataFolder, 'example.txt');
//sync wayof creating the file
fs.writeFileSync(filePath, 'Hello this is an example');
console.log('File created')

const readContent = fs.readFileSync(filePath, 'utf8')
console.log('File Content:', readContent);

//async way of creating the file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, 'Hello, Async node js', (err) => {
  if(err)throw err;
  console.log('Async file created');
})