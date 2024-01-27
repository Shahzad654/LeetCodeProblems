//Print the missing values in a sorted array
var arr = [1,5,10,12];
var missing = []

function missingValues(){
    expValues = new Set(arr)
    console.log(expValues)
    minVal = Math.min(...arr)
    console.log(minVal)
    maxVal = Math.max(...arr)
    console.log(maxVal)

    for (let i=minVal; i<=maxVal; i++){
        if(!arr.includes(i)){
            missing.push(i)
        }
    }
    console.log("Missing Values Are:", missing);

}

missingValues();

