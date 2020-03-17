'use strict';


// Квэйн - выводит сам себя в консоль:
const fs = require('fs');

const text = fs.readFileSync('file.js', 'utf8');
console.log(text);
