



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









