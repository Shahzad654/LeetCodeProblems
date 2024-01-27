var stackArr = [];

function push(){
    for(let i=1; i<=5; i++){
        stackArr.push(i);
    }
}

function pop(){
    if(!stackArr) return null;
    else stackArr.pop();
    return stackArr;

}

function empty(){
    return !stackArr

}

push()
console.log(stackArr)
pop()
console.log("After pop top element:", stackArr)
console.log("Is stack empty?", empty())
