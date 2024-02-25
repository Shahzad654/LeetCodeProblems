const fibonacci = (n, n1=0, n2=1) => {
    if(n<=0){
        return []
    }
    const result = [n1]
    return result.concat(fibonacci(n-1, n2, n1+n2))

}

console.log(fibonacci(10))
