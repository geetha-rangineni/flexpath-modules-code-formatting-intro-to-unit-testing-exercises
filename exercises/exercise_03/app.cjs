// app.cjs
const { toUpperCase, toLowerCase } = require('./stringUtils.cjs');

const text = "Hello World";

console.log(toUpperCase(text)); // Output: "HELLO WORLD"
console.log(toLowerCase(text)); // Output: "hello world"
