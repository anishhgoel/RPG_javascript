let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//initializing all the buttons and moving parts
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.getElementById("text");
const xpText = document.getElementById("xpTextt");
const healthText = document.getElementById("healthText");
const goldText = document.getElementById("goldText");
const monsterStats = document.getElementById("monsterStats");
const monsterNameText = document.getElementById("monsterNameText");
const monsterHealthText= document.getElementById("monsterHealthText");
const locations = [{
    name : "town square",
    "button text" : ["Go to store","Go to Cave","Fight Dragon"],
    "button functions" : [goStore, goCave, fightDragon],
    text : "You are in the town square. You see a sign that says \"store\""
},
{
    name : "store",
    "button text" : ["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
    "button functions" : [buyHealth, buyWeapon, goTown],
    text : "You enter the store"
},
{
    name : "cave",
    "button text" : ["Fight Slime","Fight fanged beast","Go to town square"],
    "button functions" : [fightSlime, fightBeast, goTown],
    text : "You enter the Cave"

}

]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}
function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2])
}

function fightDragon(){
    console.log("Fighting Dragon")
}

function buyHealth(){
    gold = gold - 10
    health = health + 10
    goldText.innerText = gold
    healthText.innerText = health
}

function buyWeapon(){

}

function fightSlime(){

}

function fightBeast(){

}



