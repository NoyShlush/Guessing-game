let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter your first guess"));
while (parseInt(guess) !== targetNum) {
    if (guess == 'q') {
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, enter a new guess");
    } else {
        guess = prompt("Too low, enter a new guess");
    }
}
if (guess == 'q') {
    console.log("OK, GOODBYE");
} else {
    console.log(`You win, it took you ${attempts} guesses`);
}
