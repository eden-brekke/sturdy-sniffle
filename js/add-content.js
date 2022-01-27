alert('Hello! Happy to have you here! :)')

function promptUserCats() {
    let question = prompt("Do you like cats? please enter yes or no")
    if (question == "yes") {
        alert("Very exciting! Enjoy my pictures of my cats!");
        document.write("<h3> Hope you enjoyed my furbabies! :) </h3>");
    } else if (question == "no") {
        alert("That's okay, maybe some pictures can change your mind?");
        document.write("<h3> I hope Jack and Pumpkin still brought you joy :) </h3>");
    } else {
        promptUserCats();
    //  alert("Not a valid response, please enjoy pictures of my cats!")
    //  document.write("<h3>You may not read directions well, but I hope you enjoyed my furbabies :) </h3>");
    }
}

promptUserCats();

function pressAButton(){
    let text; 
    if (confirm("Press a button!") == true) {
        document.write("<h4> You pressed OK!</h4>");
    } else {
        document.write("<h4> You pressed cancel!</h4>");
    }
}

pressAButton();