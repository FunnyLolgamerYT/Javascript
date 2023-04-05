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
let acesCounter = document.getElementById("aces--p1");
let twosCounter = document.getElementById("twos--p1");
let threesCounter = document.getElementById("threes--p1");
let foursCounter = document.getElementById("fours--p1");
let fivesCounter = document.getElementById("fives--p1");
let sixesCounter = document.getElementById("sixes--p1");
let fullHouseCounter = document.getElementById("fouse--p1")
let LockedDice = [
    [false, 0, dice1],
    [false, 0, dice2],
    [false, 0, dice3],
    [false, 0, dice4],
    [false, 0, dice5]  ]






function roll() {
    if (p1Turn && rollsLeft > 0) {
        
        let rolling = 0;
        let rollinganimation;
        let lastValues = [];
        rollsLeft--;
        if (rolling < 10) {
            
            
                    rollsLeftCounter.innerHTML = rollsLeft;
            rollinganimation = setInterval(function() {
                
                for (let i = 0; i < LockedDice.length; i++) {
                    if(LockedDice[i][0] == false) {
                        let value = Math.floor(Math.random() * imgs.length);
                        LockedDice[i][2].setAttribute("src", imgs[value]);
                        LockedDice[i][1] = imgs.indexOf(imgs[value]);
                        lastValues[i] = imgs.indexOf(imgs[value]); // Store the index of the last image for each die
                        
                    }
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
    
    for(let i = 0; i < LockedDice.length; i++) {
        if(LockedDice[i][1] == num) {
            points = points + 1;
        }

    }
    return points;
}

function checker() {
    let nummers = [];
    for (let i = 0; i < LockedDice.length; i++) {
      if (!nummers.includes(LockedDice[i][1])) {
        nummers.push(LockedDice[i][1]);
      }
    }
    console.log(nummers);
    return nummers;
  }
  
  
//functie voor een full house
function fullHouse(nummers){
    if(nummers.length == 2) {
        fullHouseCounter.innerHTML = 25;
    } else {
        fullHouseCounter.innerHTML = 0;
        }
    
}
/*functie voor een single zoals, Aces, twos, threes....,
 num is het nummer waar we naar zoeken, zoals aces of twos, en dice is de combinatie van dobbel stenen als array of string*/
function single(num,dice)
{

}
/* functie die een dobbelsteen opslot zet zodat tijdens het rollen deze niet rolt*/
function lockDie(die, dieChanger){
    if('dice' + die == false) {
    LockedDice['dice'+ die] = true;
          console.log(LockedDice);
          LockedDice[die][0] = true;    
          console.table(LockedDice);
          }
         else {
            LockedDice['dice' + die] = false;
            console.log(LockedDice);
            LockedDice[die][0] = true;
            console.table(LockedDice);
        }

          




//functie die dobbestenen bij elkaar op telt
function calculatePoints(dice)
{
    
    let diceCounts = [0,0,0,0,0,0]
LockedDice.forEach(function(row) {
  row.forEach(function(num) {
    if (num === 0) {
      diceCounts[0]++;
    } else if (num === 1) {
        diceCounts[1]++;
    } else if(num === 2) {
        diceCounts[2]++;
    } else if(num === 3) {
        diceCounts[3]++;
    } else if(num === 4) {
        diceCounts[4]++;
    } else if(num === 5) {
        diceCounts[5]++;
    }
  });
});
console.log(diceCounts);
fullHouse(checker());



rollsLeft = 3;
rollsLeftCounter.innerHTML = rollsLeft;
acesCounter.innerHTML = diceCounts[0];
twosCounter.innerHTML = diceCounts[1] * 2;
threesCounter.innerHTML = diceCounts[2] * 3;
foursCounter.innerHTML = diceCounts[3] * 4;
fivesCounter.innerHTML = diceCounts[4] * 5;
sixesCounter.innerHTML = diceCounts[5] * 6;

}
/*als je 2 players maakt,
 kun je deze functie maken om van ronde te wisselen.*/
function swapTurn(){

}
//schrijf hier de rest van je code

