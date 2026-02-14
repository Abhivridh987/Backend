//npm --global version comes with node
//npm --v  or npm --version

//local dependency
// npm i <PackageName>

//global
//npm install -g <PackageName>
//sudo npm install -g <PackageName>

//package.json -  mainfest files(stores important info about project/package)
//manual approach (create package.json in root, create properties also)
//npm init (step by step process,click enter to skip)
// npm init y(everything default

const lodash = require('lodash')
arr = [1,[2,[3,[4]]]]
new_arr = lodash.flattenDeep(arr)
console.log(new_arr)
