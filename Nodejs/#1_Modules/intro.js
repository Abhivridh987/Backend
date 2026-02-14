let name = "Abhivridh"
if(name == "Abhivridh")
    console.log("hello\n");
else
    console.log("bye");

// Globals

// __dirname - path to current directory
// __filename - filename
// require - function to use current modules 
// module - info about the current module
// process - info about where the program is being executed

console.log("Path to cuurent directory : " + __dirname);
console.log("Filename : " + __filename + "\n");
console.group(process);