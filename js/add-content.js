alert('Hello! Happy to have you here! :)')

function promptUserCats() {
    let question = prompt("Do you like cats? please enter yes or no").toLowerCase();
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

function punkImgCountPrompter(promptImg){
        if (!promptImg){
        promptImg = "How many pictures of Pumpkin would you like?";
    }

   let pumpkinCount = prompt(promptImg)

    if(pumpkinCount === ""){
        let error = ' please enter a number between 1 and 3 '
        punkImgCountPrompter(promptImg + error);
    }   else if(pumpkinCount <=3 ){
        for(let i=pumpkinCount; i < 3; i++);    }
            document.getElementById("imgs").innerHTML += ('<img src="0.27.jpg">');
    }

//punkImgCountPrompter();


//    if(pumpkinCount ==2){
//        for(let i=0; i < 2; i++){
//            document.write('<img src="024.jpg">');
//            document.write('<img src="025.jpg">');
//    }}
    
//   if(pumpkinCount == 3){
//        for(let i=0; i < 3; i++){
//                    document.write('<img src="024.jpg">');
//                    document.write('<img src="025.jpg">');
//                    document.write('<img src="0.27.jpg">');
//        }}  
//    }