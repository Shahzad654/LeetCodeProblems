function Factorial(n){
    if(n==0 || n==1){
        return 1
    }
    else{
        return n * Factorial(n - 1);
    } 
}

const n = 4;
console.log(Factorial(n));
