// let firstName = prompt("What's your name?");cd 
// let age = prompt("How old are you?");
// let petsName = prompt("What is your pets name?");
let tod = prompt("What hour is it?");
// console.log("time of day", tod, typeof tod);

if(tod > 18) {
    alert('Good evening!')
} else if(tod > 12) {
    alert('Good Afternoon!');
} else if(tod >= 0) {
    alert('Good Morning!');
} else {
    alert('Welcome')
}

// Conditionals 
// based on something else -> logic gate ->
// 1 > 5 -> False
// 'Josh' = 7 -> False
if(firstName === 'Alex'){
    alert('Zork loves you')
} 
else {
    alert('Imposter!')
}

alert('Hello ' + firstName + " you are " + age + " years old. Your pets name is " + petsName + "!");

document.write('<h3>' + 'Hello ' + firstName + '</h3>');