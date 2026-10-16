let add = function (a, b){
    return a+b;
}

//arrow function

let sum = (a, b) =>{
    return a+b;
}

let factorial = n =>{
    return n>1 ? n*factorial(n-1): 1;
}

let fact = n => n>1 ? n*fact(n-1) : 1; //Since the function returns the result of exactly one statement, the return keyword can also be omitted.

// console.log(add(10, 20));
// console.log(sum(10, 20));

console.log(fact(5));
