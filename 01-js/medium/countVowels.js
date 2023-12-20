/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();
    return str.split("").filter((item)=>{
      if(item=='a' || item=='e' || item=='i' || item=='o' || item=='u') return true;
      return false;
    }).length;
}

module.exports = countVowels;