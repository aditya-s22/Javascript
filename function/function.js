let mean;
let numbers;

function getMean(){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum=sum+numbers[i];
    }
    mean = sum/(numbers.length);
}

numbers = [1,2,3,4,5,6,7,8,9,10];
getMean();
console.log(`mean ${mean}`);