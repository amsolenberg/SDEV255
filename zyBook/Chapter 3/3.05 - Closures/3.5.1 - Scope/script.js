function demoFunc() {
  // Declare a local variable 'value' with a string in the outer function 'demoFunc'
  let value = 'Value from outer function';

  // Define an inner function 'showValue' that logs the 'value' variable
  let showValue = function () {
    console.log(value); // Logs 'value' from the outer function's scope
  };

  // Call the inner function 'showValue' immediately within 'demoFunc'
  showValue();
}

// Call the outer function 'demoFunc' to run the code
demoFunc();
