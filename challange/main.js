//alert("Hello from main.js");
//console.log("hello console!");

//Challenge 1 age in days
//document.getElementById('flex-box-result').innerHTML = "Hello!";
function ageInDays(){
    var birthYear = prompt("What year were you born?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    //console.log(ageInDayss);
}

function resetAnswear(){
    document.getElementById("ageInDays").remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-box-container-2");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);

}