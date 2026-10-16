let username = prompt("What is your name?", "John Doe");
username = username ? username : "anonymous";

let age = prompt("Hello " + username + " how old are you?");
alert(username + " is " + age + " years old");
