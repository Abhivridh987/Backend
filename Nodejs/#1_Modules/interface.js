// Importing objects

const names = require('./names.js');
console.log(names.eng_alpha);
console.log(names.relations.Father);


// Importing Functions

const func = require('./functions.js');
func.hello("abhi")
func.greet("abhi")

// Importing Classes

let utils= require('./utils.js');
const util = new utils.Show();
util.display("helo")