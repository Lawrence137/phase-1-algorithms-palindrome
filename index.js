function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];}
    return word === reverseWord;
}


/* 
  Add your pseudocode here

  function isPalindrome(word)
  # convert the given word to lowercase
  word = word.toLowerCase()

  # create an empty string to store the reverse of the word
  reverseWord = ""

  # iterate over the characters in the word in reverse order
  for each character in word in reverse order
    # add the current character to the reverseWord string
    append character to reverseWord

  # compare the original word with its reverse
  if word is equal to reverseWord
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

  This solution works by first converting the given word to lowercase so that we can compare it with its reverse case-insensitively. 
  It then creates an empty string to store the reverse of the word and iterates over the characters in the word in reverse order,
   appending each character to the reverseWord string.
    Finally, it compares the original word with its reverse and returns true if they are equal and false otherwise.
*/

describe("isPalindrome", () => {
  it("returns true for 'abba'", () => {
    expect(isPalindrome("abba")).to.be.true;
  });
  it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).to.be.true;
  });
  it("returns true for 'a'", () => {
    expect(isPalindrome("a")).to.be.true;
  });
  it("returns false for 'robot'", () => {
    expect(isPalindrome("robot")).to.be.false;
  });
  it("returns false for 'ab'", () => {
    expect(isPalindrome("ab")).to.be.false;
  });
});

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
