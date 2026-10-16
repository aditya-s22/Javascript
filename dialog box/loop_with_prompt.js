let names =[];
let isover=false;
while(!isover){
    let username = prompt("Enter name: ");
    if (username!=null)
        names.push(username);
    else
        isover=true;
}

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}