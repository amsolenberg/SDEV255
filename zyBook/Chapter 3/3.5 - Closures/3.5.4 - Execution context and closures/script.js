// Declare variables in the outer (global) scope, initially set to null.
// These will later be assigned functions within createIncDecLog.
let inc = null;
let dec = null;
let log;

// Define a function to initialize `inc`, `dec`, and `log` with closures that manipulate `number`.
function createIncDecLog() {
    // Local variable scoped within createIncDecLog, closed over by the inner functions.
    let number = 0;

    // Assign an increment function to `inc` that increases `number` by 1.
    inc = function () {
        number++;
    };

    // Assign a decrement function to `dec` that decreases `number` by 1.
    dec = function () {
        number--;
    };

    // Assign a logging function to `log` that outputs the current value of `number`.
    log = function () {
        console.log(number);
    };
}

// Call createIncDecLog to initialize `inc`, `dec`, and `log` with the appropriate functions.
createIncDecLog();

// Call the increment function twice, increasing `number` from 0 to 2.
inc();
inc();

// Call the logging function to output the current value of `number` (which is now 2).
log();
