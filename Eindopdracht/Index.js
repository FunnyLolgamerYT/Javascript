let p1Scores =[];//sla hierin de gebruikte nummers op, dit zijn de nummers die beige gekleurd zijn
let p2Scores =[];
let rollsLeft=3; // het aantal rollen die in de header moeten staan
let rollsLeftCounter = document.getElementById("rolls");
let highscore=0;
let p1Turn=true;//true voor player 1, false voor player 2
let dice=[];//sla hierin de dobbesteen html elementen op, zodat je deze kan aanpassen via js
const imgs = ["Images/Dice-1.png", "Images/Dice-2.png", "Images/Dice-3.png", "Images/Dice-4.png", "Images/Dice-5.png", "Images/Dice-6.png"];
let dice1 = document.getElementById("die1");
let dice2 = document.getElementById("die2");
let dice3 = document.getElementById("die3");
let dice4 = document.getElementById("die4");
let dice5 = document.getElementById("die5");





function roll() {
    if (p1Turn && rollsLeft > 0) {
        let rolling = 0;
        let rollinganimation;
        let lastValues = [];
        let diceArray = [dice1, dice2, dice3, dice4, dice5];
        if (rolling < 10) {
            rollsLeft--;
                    rollsLeftCounter.innerHTML = rollsLeft;
            rollinganimation = setInterval(function() {
                for (let i = 0; i < diceArray.length; i++) {
                    
                    let value = Math.floor(Math.random() * imgs.length);
                    diceArray[i].setAttribute("src", imgs[value]);
                    lastValues[i] = imgs.indexOf(imgs[value]); // Store the index of the last image for each die
                }
                console.log(rolling);
                rolling++;
                if (rolling >= 10) {
                    clearInterval(rollinganimation);
                    console.log(lastValues); // Log the last values of the dice
                    
                }
            }, 100);
        }
        
    }
}



//voorbeeld code hoe je een button interactable kan maken, zodat je deze op hold kan zetten
/*let test = document.getElementById("die1").onclick= function(){
    console.log(this.id);
}
 */
/*alle functies hebben een return value die aangeeft hoeveel punten die combinatie geeft. 
als de return value 0 is heb je de combinatie niet gehaald.*/

/*functie voor three en four of a kind en yahtzee,
 dice is hier een array van nummers of een string gevult met nummers*/
function nOfAKind(num,dice){ 
    let points;
    return points;
}
//functie voor een full house
function fullHouse(dice){
  
}
/*functie voor een single zoals, Aces, twos, threes....,
 num is het nummer waar we naar zoeken, zoals aces of twos, en dice is de combinatie van dobbel stenen als array of string*/
function single(num,dice)
{

}
/* functie die een dobbelsteen opslot zet zodat tijdens het rollen deze niet rolt*/
function lockDie(die){

}
//functie die dobbestenen bij elkaar op telt
function calculatePoints(dice)
{

}
/*als je 2 players maakt,
 kun je deze functie maken om van ronde te wisselen.*/
function swapTurn(){

}
//schrijf hier de rest van je code
function rollingAnimation() {  
    dice1.setAttribute("src", imgs[Math.floor(Math.random() * imgs.length)]) ;
    rolling++;
    console.log("test")
    roll();
}
