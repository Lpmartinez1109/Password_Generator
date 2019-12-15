// Assignment Code
// var generateEl = document.querySelector("#generate");
// var copyEl = document.querySelector("#copyPassword");


function generates(){
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
    generate();
}

function generate(){
    if (isOp1 || isOp2 || isOp3 || isOp4) {
        if (isOp1) {
            possibleOptions = possibleOptions.concat(option1)
        };
        
        if (isOp2) {
            possibleOptions = possibleOptions.concat(option2)
        };
        
        if (isOp3) {
            possibleOptions = possibleOptions.concat(option3)
        };
        if (isOp4){
            possibleOptions = possibleOptions.concat(option4)
        }
        password();

        
    } else {
        alert("You must enable an option");
        confirms();}
    };

function randomNumber(){
    return Math.floor(Math.random()* possibleOptions.length)
};

function password() {
    var text = "";
    for (var i = 0; i<16; i++){
        text+=possibleOptions[randomNumber()]
    }
    document.getElementById("password").value = text;
    
}

confirms();
}


var generateBtn = document.querySelector("#generate");






// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

function copyToClipboard() {
  // BONUS 
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(writePassword){
    writePassword.preventDefault();
    generates();
})