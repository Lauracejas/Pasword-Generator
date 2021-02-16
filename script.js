// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "#", "@", "%", "\\", "[", "]", "{", "}"];

function randomGenerate(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;

}

// Main function = Generate Password
function generatePassword() {
  var passwArray = [];
  var resultPassw = [];
  var garantyCharacters = [];

  var totalChar = prompt(" How many characters would you like your password to be? ");

  if (totalChar < 8 || totalChar > 128) {
    alert("Password must have at least 8 characters and less than 128 characters!\nPlease start over.");
    return;
  }


  if (confirm("Would you like your password to contain upper case letters?")) {
    Array.prototype.push.apply(passwArray, upperCase);
    garantyCharacters.push(randomGenerate(upperCase));
    //console.log(passwArray);
    //console.log(garantyCharacters);
  }


  if (confirm("Would you like your password to contain lower case letters?")) {
    Array.prototype.push.apply(passwArray, lowerCase);
    garantyCharacters.push(randomGenerate(lowerCase));
    //console.log(passwArray);
    //console.log(garantyCharacters);
  }


  if (confirm("Would you like your password to contain numbers?")) {
    Array.prototype.push.apply(passwArray, numbers);
    garantyCharacters.push(randomGenerate(numbers));
    //console.log(passwArray);
    //console.log(garantyCharacters);
  }

  if (confirm("Would you like your password to contain symbols?")) {
    Array.prototype.push.apply(passwArray, symbols);
    garantyCharacters.push(randomGenerate(symbols));
    //console.log(passwArray);
    //console.log(garantyCharacters);

  }

  if (passwArray.length === 0) {
    alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
  }

  // Run for loop to use confirmed information and generate password as a result


  for (var i = 0; i < totalChar; i++) {
    //var random = Math.floor(Math.random() * passwArray.length);
    var posibleCharacter = randomGenerate(passwArray);

    resultPassw.push(posibleCharacter);
    
  }
  for (var i = 0; i < garantyCharacters.length; i++) {
    resultPassw[i] = garantyCharacters[i];

  }
  //console.log(resultPassw);
  return resultPassw.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);