/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var thorX = parseInt(inputs[2]); // Thor's starting X position
var thorY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    var directionY = "";
    var directionX = "";
    var direction = "";
    
    if (lightY > thorY) {
      directionY = "S";
      thorY++;
    }
    else if (lightY < thorY) {
      directionY = "N";
      thorY--;
    }
    else {
      directionY = "";
    }
  
    if (lightX > thorX) {
      directionX = "E";
      thorX++;
    }
    else if (lightX < thorX) {
      directionX = "W";
      thorX--;
    }
    else {
      directionX = "";
    } 
    direction = directionY + directionX;
    
    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}

// challenge at: https://www.codingame.com/ide/puzzle/power-of-thor-episode-1