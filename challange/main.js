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

/*
function rpsGame(playerAnswear){
    console.log(playerAnswear.id);
}
*/

rpsGame = (playerAnswear) => {
    playerAnswear = playerAnswear.id;
    var botChoice;
    
    botChoice = numberToChoice(botChoiceRes());
    console.log(botChoice);
    
    result = decideWinner(playerAnswear, botChoice);//return array [0, 1] humon lose, bot won   
    console.log(result);
    
    massage = finalMassage(result);// {'massage:' 'You won', 'color:' 'green'}
    console.log(massage);
    
    rpsFrontEnd(playerAnswear, botChoice, massage);
}

let botChoiceRes = () => {
    return Math.floor(Math.random() * 3);
}

let numberToChoice = (botChoice) =>{
    return ['rock','paper','scissors'][botChoice];
}

let decideWinner = (playerAnswear, botChoice) =>{
    var rpsDataBase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors':{'scissors': 0.5, 'rock': 0, 'paper': 1}
    };

    var yourScore = rpsDataBase[playerAnswear][botChoice];
    var botScore = rpsDataBase[botChoice][playerAnswear];

    return result = [yourScore, botScore];
}

var finalMassage = ([yourScore, botScore]) =>{
    if (yourScore === 0 ){
        return {'massage': 'You lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'massage': 'You tied!', 'color': 'yellow'};
    }else{
        return {'massage': 'You won!', 'color': 'green'};
    }
}

var rpsFrontEnd = (humanImgChoice, botImgChoice, massage) =>{
    var imageDB = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    };

    //clear all image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var massageDiv = document.createElement("div");
    
    humanDiv.innerHTML = "<img src='" + imageDB[humanImgChoice] + "' height=150 weight = 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    botDiv.innerHTML = "<img src='" + imageDB[botImgChoice] + "' height=150 weight = 150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    massageDiv.innerHTML = "<h1 style='color: " + massage['color'] + "; font-size=60px; padding 30px;'>" + massage["massage"] + "</h1>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(massageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}


//Challenge 4 Change Btn color
var all_btn = document.getElementsByTagName("button");//collect all btn 
console.log(all_btn);

var allBtnCopy = [];
for(let i = 0; i<all_btn.length; i++){
    allBtnCopy.push(all_btn[i].classList[1]);
}

console.log(allBtnCopy);

function buttonColorChange(btnValue){
    console.log(btnValue.value);
    if(btnValue.value === 'red'){
        redBtn();
    }else if(btnValue.value === 'green'){
        greenBtn();
    }else if (btnValue.value === 'reset'){
        resetBtn();
    }else if(btnValue.value === 'random'){
        randomBtn();
    }
}

function redBtn() {
    for(let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-danger');
    }
}

var greenBtn = () => {
    for(let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add('btn-success');
    }
}

function resetBtn() {
    for(let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(allBtnCopy[i]);
    }
}

function randomBtn() {
    for(let i = 0; i < all_btn.length; i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(allBtnCopy[Math.floor(Math.random()*allBtnCopy.length)]);
    }
}

//challenge 5 blackjack
document.querySelector('#Black-Jack-Hit-Btn').addEventListener('click', blackJackHit);
document.querySelector('#BlackJackDealBtn').addEventListener('click', dealBtn);

let blackJackGame = {
    'you': {'scoreSpan': '#yourBJres', 'div': '#your-box', 'score': 0},
    'dialer': {'scoreSpan': '#dealerBJres', 'div': '#dealer-box', 'score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','A','J','K','Q'], 
    'cardsMap': {'2': 2, '3': 3,'4': 4, '5': 5, '6': 6, '7': 7,'8': 8, '9': 9,'10': 10, 'A': [1,11], 'J': 10, 'K': 10, 'Q': 10},
}

const you = blackJackGame['you'];
const dialer = blackJackGame['dialer'];

const hitSound = new Audio('sounds/swish.m4a');

function blackJackHit() {
    let card = randomCard();    
    showCard(you, card);
    updateScore(you, card);
    showScore(you);
    //console.log("score = "  + you['score']);
}

function showCard(activePlayer, card) {
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement('img');
        cardImg.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImg);
        hitSound.play();
    }
    
}

function dealBtn() {
    //remove img
    let yourImg = document.querySelector('#your-box').querySelectorAll('img');
    let dialerImg = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(var i = 0; i< dialerImg.length; i++){
        dialerImg[i].remove();
    }

    for(var i = 0; i < yourImg.length; i++){
        yourImg[i].remove();
    }

    //remove score
    you['score'] = 0;
    dialer['score'] = 0;

    document.querySelector('#yourBJres').textContent = 0;
    document.querySelector('#yourBJres').style.color = 'white';

    document.querySelector('#dealerBJres').textContent = 0;
    document.querySelector('#dealerBJres').style.color = 'white';
}

console.log("Lenght = " + blackJackGame['cards'].length);

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomIndex];
}

function updateScore(activePlayer, card){
    if(card === 'A'){
        if((activePlayer['score'] + blackJackGame['cardsMap'][card][1]) < 21){
            activePlayer['score'] += blackJackGame['cardsMap'][card][1];
        }else{
            activePlayer['score'] += blackJackGame['cardsMap'][card][0];
        }
    }else{
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }   
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
    
}

//test arrow function
/*
let answear = (a,b) => a+b;

console.log(answear(10,29));

let ArrowFun = () => console.log("Welcom");
ArrowFun();



let ArrFun2 = (a, b) => {
    console.log("ArrFun2");
    console.log(a);
    console.log(b);
    console.log(a+b);
    while(a<b){
        a++;
    }
    if(a = b){
        console.log("now a = b");
    }
    else{
        console.log("now a != b");
    }
}

ArrFun2(5,10);
*/

/*
let ageCol = prompt("How old are you?");

let welcom = (ageCol > 18) ? 
    () => console.log("Good!"):
    () => console.log("!Good");

welcom();
*/

/*
function ask (ques, yes, no){
    if(confirm(ques)){
        yes();
    }else{
        no();
    }
}

ask(
    "Вы уверены?",
    () => alert("Yes"),
    () => alert("No")
)
*/


/*
var Array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var resSum = 0;

for (var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        resSum +=Array[i][j];
    }
}

console.log("result = " + resSum);
*/
