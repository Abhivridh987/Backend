// let path = require('path');
// console.log(path.sep)


// let file_path = path.join("/access_file_path","file_path","path","hiii.txt")
// console.log(file_path)

// let base = path.basename(file_path)
// console.log(base);

const path2 = require('path');
const file_path2 = __dirname
console.log("Current Directory : " + file_path2)   // Shows the current directory46
console.log("Base Directory Name : " + path2.basename(file_path2))  // Shows the base directory or base filename
console.log("Parent Directory : " + path2.dirname(file_path2));  // Shows the parent directory of the current directory
console.log("Joining Paths : " + path2.join('hello','hai'))  // Joins the given path
console.log("New Directory(Joined): " + path2.join(path2.dirname(__dirname),'hello','hai','hi.csv'));
const abs_file_path = path2.resolve(path2.dirname(__dirname),'hello','hai','hi.csv');
console.log("New Directory(Resolved) : " + abs_file_path);
let ext = path2.extname(abs_file_path);    // Extract Extension
abs_file_path2 = abs_file_path.replace(ext,"");   // Replace extension
let new_ext = '.html'
abs_file_path3= abs_file_path2 + new_ext;
console.log("New Directory (With New Extension) : " + abs_file_path3)
console.log("Base Directory Name : " + path2.basename(abs_file_path3)) 

