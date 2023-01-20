function isPalindrome(word) {
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("")
  if (word === joinArray) {
    return true
  } else {
    return false
  }
}

/* 
  break up the letters of the word
  reverse them
  join them back together
  see if the word at the beginning matches the word at the end
  If it does, it's truely a palindrome
*/

/*
  splitString turns "word" into ["w", "o", "r", "d"]
  reverse array takes the result of the previous variable and turns it into ["d", "r", "o", "w"]
  joinArray takes the result of the previous variable and converts the array of strings into a string
  If the word passed into the function deeply-equals the result of joinArray, the function will return true.
  Otherwise (if the passed in word does not deeply equal the result of joinArray), this function will return false.
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
