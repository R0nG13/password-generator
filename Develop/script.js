// Assignment code here

function generatePassword() {
  // prompt for password length between 8-128 characters
  var passwordLength;

  while (!passwordLength || passwordLength < 8 || passwordLength > 128) { 
    passwordLength = window.prompt("Please choose your password length between 8 and 128 characters");
    passwordLength = parseInt(passwordLength);
  }

  // prompt for character types including lowercase, uppercase, numeric, and/or special characters
  // validate input and at least one character type should be selected
  // make array to store selected char types, create while loop and while that array is empty keep asking for char types
  // probably once a user has selected a char type an empty value should terminate the loop

  // password generates in alert window or written to the page
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
