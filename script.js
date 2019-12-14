// Assignment Code
var option1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var option2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var option3 = ["1","2","3","4","5","6","7","8","9","0"];
var option4 = ["~","!","@","#","$","%","^","&","*","(",")","-","+","_","="];

var isOp1;
var isOp2;
var isOp3;
var isOp4;
var possibleOptions = [];

function confirms(){
    isOp1 = confirm("Would you like to use Upper case letters?");
    isOp2 = confirm("Would you like to use Lower case letters?");
    isOp3 = confirm("Would you like to use numbers?");
    isOp4 = confirm("Would you like to Special characters?");
    optionBuilder();
}



var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

