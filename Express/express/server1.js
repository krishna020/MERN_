const path=require('path')
const fs=require('fs')
console.log(path.join(__dirname,'/demo','/src','/index.html')) //same
console.log(path.resolve(__dirname,'/demo','/src','/index.html'))  //same

// The two functions deal with segments starting with / in very different ways; join will 
// just concatenate it with the previous argument, however resolve will treat this as 
// the root directory, and ignore all previous paths - think of it as the result of executing cd with each argument:

// path.join('/a', '/b') // Outputs '/a/b'

// path.resolve('/a', '/b') // Outputs '/b'