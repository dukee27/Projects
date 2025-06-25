let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name:"sword",
        power:100
    }
];

const monster = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name:"fanged beast",
        level: 8,
        health: 60
    },
    {
        name:"dragon",
        level: 20,
        health: 300
    }
];


const locations =[{
        name:"town square",
        "button text":["Go to store","Go to cave","Fight Dragon"],
        "button functions":[goStore,goCave,fightDragon],
        text:"you are in town. You see a sign that says \"store\"\n"
    },
    {
        name:"store",
        "button text":["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
        "button functions":[buyHealth,buyWeapon,goTown],
        text:"You enter the store.\n"
    },
    {
        name:"cave",
        "button text":["fight slime","fight beast","fight dragon"],
        "button functions":[fightSlime,fightBeast,fightDragon],
        text:"You have entered cave, you see some monsters\n"
    },
    {
        name:"fight",
        "button text":["attack","dodge","run"],
        "button functions":[attack,dodge,goTown],
        text: "you are fighting a monster\n"
    },
    {
        name:"killMonster",
        "button text":["Go to town square","Go to town square","Go to town square"],
        "button functions":[goTown,goTown,goTown],
        text:"the monster screams as it falls down in defeat , and slowly perishes away...\n"
    },
    {
        name:"lose",
        "button text":["replay","replay","replay"],
        "button functions":[restart,restart,restart],
        text:"you die...\n"
    },
    {
        name:"Win",
        "button text":["replay","replay","replay"],
        "button functions":[restart,restart,restart],
        text:"you Win!!\n"
    }
];

function update(location){
    monsterStats.style.display = "none";
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
    update(locations[2]);
}

function sellWeapon(){
    if(inventory.length >1){
        gold += 15;
        gold.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "you sold a " + currentWeapon + ".\n";
    }else{
        text.innerText = "don't sell your only weapon!!\n";
    }
    

}
function buyHealth(){
    if(gold >= 10){
        gold -=10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else{
        text.innerText = "you don't have enough gold to buy health.\n";
    }
    
}

function buyWeapon(){
    if(currentWeapon < weapons.length-1){
        if(gold>=30){
            gold -=30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".\n";
            inventory.push(newWeapon);
            text.innerText += "in your inventory you have: " + inventory + "\n";
        }
        else{
            text.innerText = "you don't have enough gold to buy a weapon\n";
            button2.innerText = "sell weapon for 15 gold";
            button2.onclick = sellWeapon;
        }
    }
    else{
        text.innerText = "you already have best weapon\n";
    }
    
}

function fightSlime(){
    fighting = 0;
    goFight();
}

function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon(){
    fighting = 2;
    goFight();
}
function goFight(){
    update(locations[3]);
    monsterHealth = monster[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monster[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack(){
    text.innerText = "the" + monster[fighting].name + "attacks.\n";
    text.innerText += "you attack it with you" + weapons[currentWeapon].name + ".\n";
    if(isMonsterHit()){
        health -= getMonsterAttackValue(monster[fighting].level);
        if(weaponBreaks() && inventory.length > 1){
            text.innerText = "your" + inventory.pop() + "is broken!";
            currentWeapon--;
        }
    }else{
        text.innerText = "its a miss!";
    }
    
    monsterHealth -= weapons[currentWeapon].power+Math.floor(Math.random()*xp)+1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if(health<= 0){
        lose();
    }else if(monsterHealth <= 0){
        fighting === 2 ? winGame():defeatMonster();
    }
}
function isMonsterHit(){
    return Math.random() > .2 || health < 20;
}
function weaponBreaks(){
    return Math.random() > .1;
}

function getMonsterAttackValue(level){
    let hit = (level*5)-(Math.floor(Math.random()*xp));
    console.log(hit);
    return hit;
}
function dodge(){
    text.innerText = "You dodge the attack from" + monster[fighting].name + ".\n";
}

function defeatMonster(){
    gold += Math.floor(monster[fighting].level*6.7);
    xp += monster[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}
function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    goldText.innerText = gold;
    xpText.innerText = xp;
    healthText.innerText = health;
    inventory = ["stick"];
    goTown();
}

goTown();