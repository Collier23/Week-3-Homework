// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {
  var passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return;
  }
  var specialCharacters = confirm("Would you like to include special characters?");
  var numbers = confirm("Would you like to include numbers?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var password = "";
  var possibleCharacters = "";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (specialCharacters) {
    possibleCharacters += specialCharacters;
  }
  if (numbers) {
    possibleCharacters += numbers;
  }
  if (lowercase) {
    possibleCharacters += lowercase;
  }
  if (uppercase) {
    possibleCharacters += uppercase;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return password;

}




// this loop will assign a value to the 'newPassword' variable


generateBtn.addEventListener("click", writePassword);
