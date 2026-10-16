const data = {
    name: 'Aditya',
    'full name': 'Aditya Soni', // can't be accessed using dot notation
    city: 'Prayagraj',
    email: 'aditya@google.com',
    isLoggedin: true,
};

console.log(data['email']); // this method is recommended
console.log(data.email);

console.log(data['full name']);



//symbol

const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2);
