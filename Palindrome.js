var str;
var re;
var lowRegStr;
var reverseStr;

function palindrome(str) {
  re = /[^A-Za-z0–9]/g;
  lowRegStr = str.toLowerCase().replace(re, '');
  console.log(lowRegStr);
  reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
  if (reverseStr === str) {
    console.log("The string is Palindrome");
  } else {
    console.log("The string is not a Palindrome");
  }

}

palindrome("eye");
