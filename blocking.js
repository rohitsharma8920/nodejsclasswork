//Single thread

console.log("First");
console.log("Second");
console.log("Third");


//blocking and non-blocking

function heavyTask() {
  console.log("Starting heavy task...");
  for (let i = 0; i < 3000000000; i++) {}
  console.log("Heavy task complete!");
}

console.log("Before task");
heavyTask();
console.log("After task");


// adding time

console.log("Before task");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("After task");


