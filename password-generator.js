// Step 1: Import the generate-password package
const generator = require('generate-password');

// Step 2: Create a function that generates a random password
function createPassword() {
  const password = generator.generate({
    length: 12,          // length of the password
    numbers: true,       // include numbers
    symbols: true,       // include symbols
    uppercase: true,     // include uppercase letters
    lowercase: true      // include lowercase letters
  });

  console.log("Generated password:", password);
}

// Step 3: Call the function
createPassword();
