// const arr = new Array(1, 2, 3, 4, 5);
// // console.log("A:",arr);

// // const arr2 = arr.slice(1,3); // slice will return a new array with the elements from the original array but will not remove them from the original array
// // console.log(arr);
// // console.log(arr2);

// console.log("A:", arr);
// const arr3 = arr.splice(1,3); // splice will remove the elements from the original array and return them in a new array 
// console.log("B:", arr);
// console.log(arr3);
// console.log("C:", arr);

const arr = ["aditya", 'akankcha'];
const arr2 = ['arbind', 'suneeta'];

const all_arr = [...arr, ...arr2]; // spread operator will spread the elements of the array into a new array
console.log(all_arr);

console.log(Array.isArray("aditya"));
console.log(Array.from("aditya")); 