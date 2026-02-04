console.log("rohit sharmaji");

const path = require('node:path');
const PATH  = "C:\\Users\\Admin\\Downloads\\OneDrive\\Desktop\\nodejsclasswork\\path.js"
console.log(
  path.basename(PATH)
  );


//If you need only path without extention in o/p

  // path.basename("C:\\Users\\Admin\\Downloads\\OneDrive\\Desktop\\nodejsclasswork\\path.js",".js")



  
// console.log(process.env.PATH.split(path.delimiter));

  

console.log(path.extname(PATH));
console.log(path.dirname(PATH));
console.log(path.parse(PATH));
  