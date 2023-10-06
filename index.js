function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = renderReverse(word)
  return word === reverseWord
}
function renderReverse(word){
  return word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
  accept user input
  if(word===reversedword){
    return true
  } else{
    return false
  }
*/

/*
  Add written explanation of your solution here
  1. First i split the word to an array since arrays have an inbuilt reverse method
  2. Second i reversed the array
  3. Third i joined the array to a string
  4. Fourth i checked if the original word is equal to the reversed word
  5. Then i returned the result as boolean(true or false) 
*/

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
