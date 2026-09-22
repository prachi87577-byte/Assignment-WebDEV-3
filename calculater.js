// CLI Calculator using process.argv

console.log("Calculator Started");

const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

console.log("Operation:", operation);
console.log("Number 1:", num1);
console.log("Number 2:", num2);

let result;

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "sub":
        result = num1 - num2;
        break;

    case "mul":
        result = num1 * num2;
        break;

    case "div":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, sub, mul or div");
        process.exit(1);
}

console.log("Result:", result);
console.log("Calculator Finished");