



var namePrompt = prompt("Please enter your name.");

var genderPrompt = prompt("Please select your gender.");

var agePrompt = prompt("Please enter your age.");


if (agePrompt <= 0 ) {

    alert("Age cannot be less or equal to zero.")
}


var skipWelcome = confirm("Do you wish to continue with the welcoming messages?");

if (skipWelcome == true) {
    


if (genderPrompt == "Male" || genderPrompt =="male") {

    alert("Welcome" + " " + "Mr" + " " + namePrompt)

}
    else if (genderPrompt == "Female" || genderPrompt =="female") {
    
    alert("Welcome" + " " + "Ms" + " " + namePrompt)
    }
    
 else {

    alert("Welcome" +  " " + namePrompt)
    
}

}






// userInput = userInput.toLowerCase()
//  while(userInput !== "yes"   && userInput !== "no" && userInput !== ""){
//      userInput = prompt("Enter Male or Female").toLowerCase();
//  };







let answers= [];

function userLocation() {

   var answer = prompt("Do you currently live in Jordan?")

    answers.push(answer);

    

    
}

userLocation();

// console.log(answers);



function userStatus() {

    var marry = prompt("Are you married?")
 
     answers.push(marry);
 
     
 
     
 }

userStatus();

// console.log(answers);

function userCar() {

    var car = prompt("Do you have a car?")
 
     answers.push(car);
 
 }

userCar();

// console.log(answers);




function valid(arr) {
    
   
     
    for (let i = 0; i <= arr.length-1; i++) {
       
        arr[i] = arr[i].toLowerCase();
        
        if (arr[i] !== "yes" && arr[i] !== "no") {
            
          arr[i] = "invalid"  ;

          

        }
        
    }
        return arr
        
}

console.log(valid(answers));

