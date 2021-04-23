/*
1) Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
2)  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
*/

"use strict"

let userInput = prompt("propose a palindrome")
isPalindrome(userInput)

firstElements(5)


function isPalindrome(string) {
  let lowString = string.toLowerCase();
  let shortString = lowString.replace(/\s+/g, ''); //\s whitespace
  console.log(shortString);
  let pureString = shortString.replace(/[^a-zA-Z]/g, ''); // special characters
  let perhapspal = pureString.split("");
  // console.log(perhapspal)
  let palperhaps = perhapspal.reverse();
  // console.log(palperhaps)
  let palstring = palperhaps.join("");
  // console.log(palstring)

  if (pureString === palstring) {
    console.log(string + " is a palindrome")
  }

  else {
    console.log(string + " is not a palindrome")
  }

}

function firstElements(n) {
  let array = ["ele1", "ele2", "ele3", "ele4", "ele5", "ele6"]
  for (let i = 0; i < n; i++) {
    console.log(array[i])
  }
}

