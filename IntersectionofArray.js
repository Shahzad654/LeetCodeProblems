//Problem:-
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Step1: Take two arrays 
// Step2: Apply filter method on nums1. filter() method creates a new array filled with elements that pass a test provided by a function.
// Step3: Now console the intersectionArray function with speard operator and the Set method.
// Because Set method removes the duplicate values from the array.

var nums1 = [1, 2, 2, 1, 4, 3];
var nums2 = [2, 2, 4];

let intersectionArray = nums1.filter((curElem)=>{
    return nums2.includes(curElem)

})

console.log([...new Set(intersectionArray)]);
