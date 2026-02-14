const fs = require('fs');
const path = require('path')


console.log("File Process Starting");

let file1_path = path.resolve(__dirname,'files','Readfiles','file1.txt');
console.log("File 1 Path : " + file1_path)

let file2_path = path.resolve(__dirname,'files','Readfiles','file2.txt');
console.log("File 2 Path : "+ file2_path)

let file3_path = path.resolve(__dirname,"files","Writefiles","write_sync.txt");
console.log("Target Location : " + file3_path)
console.log();

let firstFile = fs.readFileSync(file1_path,"utf8")
let secondFile = fs.readFileSync(file2_path,"utf8")

fs.writeFileSync(file3_path,`${firstFile} \n${secondFile}`,{flag:'a'})
console.log("Task Completed")
console.log("Moving to Next Task")
