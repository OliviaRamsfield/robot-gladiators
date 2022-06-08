var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
//console.log(enemyNames[3]);

//fight function
var fight = function fight(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        if (playerHealth > 0) {
            //let player know what rounf they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        else {
            window.alert("You have lost your robot in battle! Game over!");
        }
        }
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        console.log(promptFight);

        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            //Log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
        
                //award player money for winning
                playerMoney = playerMoney +20
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //Subtract the value of'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;
            //Log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            }
       }
}; //end of fight function

//for(var i = 0; i < enemyNames.length; i++) {
    //var pickedEnemyName = enemyNames[i];
    //enemyHealth = 50;
    //fight(pickedEnemyName[i]);
//};

//Game States
//"WIN" - player robot has defeated all enemy-robots
//  * fight all enemy robots
//  * defeat each enemy robot
//"LOSE" - player robot's health is zero or less
