const crypto = require("crypto");

console.log("Dice Simulator Started");

function rollDice() {
    return crypto.randomInt(1, 7);
}

for (let i = 1; i <= 5; i++) {
    const dice = rollDice();
    console.log(`Roll ${i}: Dice Rolled: ${dice}`);
}

console.log("Dice Simulator Completed");