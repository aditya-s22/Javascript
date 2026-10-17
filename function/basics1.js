// passing objects in a function

const user = {
    username: "Aditya",
    dept: "DS"
};

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and department is ${anyobject.dept}.`)
};

// handleObjects(user);

// passing array in a function

const arr = [10, 20, 30];

function handleArray(getarray){
    return getarray[1];
}

// console.log(handleArray(arr));

//-----------------------------------------------//

// (...) Rest operator

function addPrice(val1, val2, ...num){   // val1:200, val2:300, and rest all in num
    return num;
}

console.log(addPrice(200, 300, 500, 900, 2000));