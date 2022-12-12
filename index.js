function isPalindrome(word) {
  // Write your algorithm here

  const wordBackward = reversed(word);
  if(word === wordBackward) {
    return true;

  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/
function reversed(word) {
  const wordArray = word.split("")
  const wordBackwardArray = wordArray.reverse()
  const wordBackward= wordBackwardArray.join("");
  return wordBackward;
}
/*
  Add written explanation of your solution here

*/ //The first part of the solution was the pseudocode.
// My pseudocode consisted of a function within which I declared three variables. The first variable "wordArray" was an array of the letters making up a word, arranged in a manner to correctly spell the word.
// The second variable is an array of the reversed array of letters
//The third variable, "wordBackward", joined the individual letters to form he reversed word, and was then returned as a string

//The function isPalindrome then takes a word and compared it to its reverse, if the word is a palindrome, then it returns true, otherwise it returns false. 




// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
