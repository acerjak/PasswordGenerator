// Assignment Code
var generateBtn = document.querySelector("#generate");


// define all vars we will need
// write function to include all characters
function generatePassword () {

//Prompt with length criteria, min: 8 char max: 128 char (array)
const passLength = parseInt(prompt('Pick a length for your password that is more than 8 characters and less than 128 characters.'))
const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numChar = '0123456789'
const specialChar = '!@#$%^&*()+-=:;<>[]`{}|~_.'


//When clicked, generate password 
//Prompt user with password criteria, define what criteria to use
//Prompt with character type criteria: lowercase, uppercase, numeric, and/or special char

const lowC = confirm('Do you want to include lower case characters?')
const upC = confirm('Do you want to include upper case characters?')
const numC = confirm('Do you want to include number characters?')
const specC = confirm('Do you want to include special characters?')


//When user generates password, must validate all criteria was followed

if(!lowC && !upC && !numC && !specC){
    alert("You did not pick any charset")
    return
  }

if(passLength < 8 || passLength > 128) {
    alert("You did not enter the required amount of Characters.") 
    return
  }  
  
  let passHolder = ''
  let newPass = ''

  // check to see what character sets user wants
  if(lowC){
    passHolder += lowerChar;
  }
  if(upC){
    passHolder += upperChar;
  }  
  if(numC){
    passHolder += numChar;
  }   
  if(specC){
    passHolder += specialChar;
  }

  // take what we stored from the user input
  for(let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  return newPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
