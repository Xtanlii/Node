const path = require('path');

console.log('Directory name', path.dirname(__filename));

const normalizePath = path.normalize('/user/.documents/../node/projects')

console.log('Normalized path', normalizePath);