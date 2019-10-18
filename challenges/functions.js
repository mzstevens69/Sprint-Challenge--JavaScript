// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(num1, num2, operate ){
    return operate(num1, num2);
}
  const add = (num1, num2) =>{
    return num1 + num2; 
  }
   
  const multiply = (num1, num2) =>{
    return num1 * num2;
  }
  const greeting = (first_name, last_name) => {
    return `Hello ${first_name} ${last_name}, nice to meet you!`
  }



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
////// STEP 2 IN ABOVE CODE/////////////////////////

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why a nested function can access the variable internal.

// Explanation: nested functions have closure which is a function used to affect the constants in the parent functions.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
