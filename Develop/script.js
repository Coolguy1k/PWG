// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Function for obtaining user input for password options
function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (hasSpecialCharacters) {
  }else if (hasNumericCharacters) {
  }else if (hasLowercaseCharacters) {
  }else if (hasUppercaseCharacters) {
  }else {
    alert('Password must include at least one character type.')
  }
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function for generating a password with given inputs
function generatePassword() {
  var options = getPasswordOptions();
  // Create an empty array
  var currentArr = new Array()
  // Conditional Statement that concatinates a new array
  if (options.hasSpecialCharacters) {
    currentArr= currentArr.concat(specialCharacters)
  }
  if (options.hasNumericCharacters) {
    currentArr= currentArr.concat(numericCharacters)
  }
  if (options.hasLowercaseCharacters) {
    currentArr= currentArr.concat(lowerCasedCharacters)
  }
  if(options.hasUppercaseCharacters) {
    currentArr= currentArr.concat(upperCasedCharacters)
  }
  console.log(currentArr)
  // Generate random string password from new array
  let pass = ""
  let i = 0
  while (i < options.length) {
    pass += getRandom(currentArr);
    i++
  } 
  return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);