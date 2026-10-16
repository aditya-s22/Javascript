function operations(func, first, second){
    return func(first, second);
}

let addition = function(a, b){
    return a+b;
}

console.log(operations(addition, 5, 10));

console.log(operations(function(a, b){
    return a*b;
}, 10, 20));