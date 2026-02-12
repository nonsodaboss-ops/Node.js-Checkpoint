// Step 1: Require the file system module
const fs = require("fs");

// Step 2: Use writeFile to create the file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File 'welcome.txt' created successfully!");
});

//Step 3: Read the file 
fs.readFile("welcome.txt", "utf8", (err, data) => 
  { if (err) { console.error("Error reading file:", err); return; }
 console.log("File contents:", data); });