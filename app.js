// A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again
// Etc.
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.



// create a ship class to shorten the amount of code needed

class Ship {
    constructor(name,hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull || Math.floor(Math.random() * 4) + 3; 
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
        this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack (opponent){
        opponent.hull -= this.firepower 
    }
}

// round starts with opening message
let gameBegins = () => {

    alert("Earth is being invaded! A swarm of aliens has come to destroy Earth! Take control of the USS Schwarzenegger, and keep the attackers at bay until reinforcements arrive ")
    alert("The rules of engagement from the pentagon is to shoot first and ask questions later!!!")
    
   // game must continue until there are no alien/opponent ships left to fight
    while (alienShips.length !== 0) {     


 // if the spaceship survives this condition will run
if (playerShip.hull > 0) {               

            if (playerShip.accuracy >= Math.random()) {
                playerShip.hit(alienShips[0])
                console.log("You've been hit!");
                alert(" enemies remaining: " + alienShips.length +  "; health remaining: " 
                + playerShip.hull + "");
            } else {
                // if you missed
            }                     
        } else {
            // if the hull reaches zero player has lost
            alert("You have lost! try again!!! ");
        }
        console.log(alienShips[0])
        //if opponent ship survies
        if (alienShips[0].hull > 0) {     
        // when the
            alienShips[0].hit(playerShip)   

        } else {
            // The current enemy ship has died at this point.
            alienShips.shift()
            if(alienShips.length == 0) {
                alert("You have defeated the enemy. Refresh the browser to play again");
                break;
            }
            
            //continue or to retreat
            let response = prompt("fire upon the enemy ship or retreat?")
            if(response === "attack") {
                // it will start from the beginning again

            } else {
                alert("You retreated. play again?");
                // This will end the while loop
                break;
            }
        }
    }
}

const ship1 = new Ship('Opponent Ship 1'); 
const ship2 = new Ship('Opponent Ship 2');
const ship3 = new Ship('Opponent Ship 3');
const ship4 = new Ship('Opponent Ship 4');
const ship5 = new Ship('Opponent Ship 5');
const ship6 = new Ship('Opponent Ship 6');

var playerShip = new Ship("USS Schwarzenegger",20, 5, 0.7);

var alienShips = [ship1, ship2, ship3, ship4, ship5, ship6];

startGame();




