let os = require('os');

// OS Type 
console.log(os.type());
console.log(os.version())
console.log(os.release());
console.log(os.version())
console.log(os.arch())
console.log(os.machine())

// User Info
console.log("\n")
console.log(os.userInfo())
console.log(os.hostname());

//Memory Space
console.log("Total Mem : " + os.totalmem)
console.log("Free mem : " + os.freemem())

// Uptime
console.log("Uptime : " + os.uptime());

// 
