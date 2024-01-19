//Problem#7:-
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Example 1:
// Input: x = 123
// Output: 321


// **Step 1:** Change number into String by using toString() method.
// **Step 2:** Now Split the String by using split("") method.
// **Step 3:** Now reverse the String by using reverse() method.
// **Step 4:** Now the String is splitted so join the string by using join("") method.
// **Step 5: ** If we have a -ve value like -321 then 
// check that if string endsWith("-") then store the "-" at first and then the string.
// now parseInt that stored value.
// **Step 6: ** else return the parsed value.


const reverse = (x) =>{
    let revInt = x.toString().split("").reverse().join("")
    if(revInt.endsWith("-")){
        revInt = "-" + revInt;
        return parseInt(revInt);
    } 
    else{
        return parseInt(revInt);

    }
    
}

console.log(reverse(1534236469));
