const lodash =require('lodash');

const names = ['ston', 'john', 'loki'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);