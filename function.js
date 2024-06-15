// function function1() {
//     console.log('hello');
//     console.log(9 + 8);
// }
// function1();

// PARAMETERS 
function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent)
}
calculateTax(2000, 0.1)
calculateTax(3000, 2)
calculateTax(5000)