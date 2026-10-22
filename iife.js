// Immediately Invoked Function Expression (IIFE)
// 1. used to immediately execute the function after defining
// **2. used to get rid of the population of global scope's variables and declarations





// ()() , similar way as chai(), which we write on calling

(function chai(){
    //named iife, as it has its name 'chai'
    console.log(`DB CONNECTED`);
})();

// writing two (or more) iife; the previous iife must be terminated with ';'

(() => {
    //unnamed iife
    console.log(`DB-2 CONNECTED`);
})();


((name) => {
    //unnamed iife with parameter
    console.log(`DB-2 CONNECTED ${name}`);
})('Aditya');

