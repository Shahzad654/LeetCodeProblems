/*You have given an array. Check wether the array contain duplicate values or not */

//Brute force apporach

console.log("....Brute Force Apporach...."); //Time Complexity => 0(nlogn)
let arr1 = [5, 3, 1, 2, 3];
console.log(arr1)

const newArr = arr1.sort()
console.log(newArr)

function checkDups(){
    for (let i = 0; i < newArr.length-1; i++) {
      if (newArr[i] === newArr[i + 1]) {
        console.log("Array consists of duplicate values");
        return;
      } 
    }
    console.log("Array does not contain any duplicates")

}
checkDups();



//Using HashSet

console.log("....Using HahSet....") //Time Complexity => 0(n)
const hashSet = new Set()
const arr = [5, 3, 1, 2, 3];

for(const element of arr){
    if(hashSet.has(element)){
        console.log("Array consists of duplicate values")
        return;
    }
    else{
        hashSet.add(element)
    }

}
console.log("Array does not consists of any duplicate value")

console.log([...hashSet]);



//Using HashMap

console.log("....Using HahMap....") //Time Complexity => 0(n)

const hashMap = {};
const arr3 = [5, 3, 1, 2, 3, 1];
const duplicates = [];

for (let i = 0; i < arr3.length; i++) {
  const element = arr3[i];
  if (hashMap[element] !== undefined) {
    duplicates.push({ value: element, indices: [hashMap[element], i] });
  } else {
    hashMap[element] = i;
  }
}
console.log("Does not have any duplicate value")

duplicates.forEach((duplicate) => {
  console.log(
    `Duplicate value ${
      duplicate.value
    } found at indices ${duplicate.indices.join(" and ")}`
  );
});

