function demoFunc2() {
  // Declare a local variable 'value' with a string in the outer function 'demoFunc2'
  let value = 'Value from outer function';

  // Return an anonymous function that logs the 'value' variable
  return function () {
    console.log(value); // Logs 'value' from the outer function's scope when called
  };
}

// Call 'demoFunc2', which returns the inner function and assigns it to 'showValue'
let showValue = demoFunc2();

// Call the returned function 'showValue', which logs the outer function's 'value'
showValue();
