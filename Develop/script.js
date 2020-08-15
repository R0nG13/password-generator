// Assignment code here

function generatePassword() {
  var charTypes = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%&*()-_.?+="
  };

  var chars = "";

  var validTypes = Object.keys(charTypes);

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
  var selectedTypes = [];
  var charType;

  while (selectedTypes.length === 0 || charType) {
    charType = window.prompt("Please choose a character type. Select cancel when done. Valid types: " + validTypes.join(', '));

    if (charType === null) {
      continue;
    }

    charType = charType.toLowerCase();
    // verify that charType is valid
    if (charType in charTypes) {
      // if a new charType is entered include those characters
      if (selectedTypes.indexOf(charType) === -1) {
        selectedTypes.push(charType);
        chars += charTypes[charType];
      } else {
        window.alert("You've already selected " + charType + ".");
      }
    }
  }

  return chars;
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