console.log("1. Start");

setTimeout(() => {
  console.log("2. This is async - runs later");
}, 0);

console.log("3. End");


//file writing/Reading

const fs = require('fs');

console.log("Start reading file...");
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log("File content:", data);
console.log("Done!");



//with read file

const fs = require('fs');

console.log("Start reading file...");
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
console.log("Done!");
