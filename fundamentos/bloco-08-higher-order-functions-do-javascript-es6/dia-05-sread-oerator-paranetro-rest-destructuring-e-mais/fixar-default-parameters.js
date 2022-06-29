// Default Parameters
// ex 1
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting();

// ex 2
const multiply = (number, value = 1) => {
    return number * value;
};

console.log(multiply(8));