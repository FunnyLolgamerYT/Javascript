let p1Scores =[];//sla hierin de gebruikte nummers op, dit zijn de nummers die beige gekleurd zijn
let p2Scores =[];
let rollsLeft=3; // het aantal rollen die in de header moeten staan
let highscore=0;
let p1Turn=true;//true voor player 1, false voor player 2
let dice=[];//sla hierin de dobbesteen html elementen op, zodat je deze kan aanpassen via js

function roll(){//deze functie voert uit wanneer de speler op roll klikt
    console.log("Roll");
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
