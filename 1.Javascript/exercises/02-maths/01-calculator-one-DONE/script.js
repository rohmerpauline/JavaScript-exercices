/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let opOneAddition = document.getElementById("op-one").value;
        let opTwoAddition = document.getElementById("op-two").value;
        let result = parseInt(opOneAddition) + parseInt(opTwoAddition);
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let opOneSubstraction = document.getElementById("op-one").value;
        let opTwoSubstraction = document.getElementById("op-two").value;
        let result = parseInt(opOneSubstraction) - parseInt(opTwoSubstraction);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let opOneMultiplication = document.getElementById("op-one").value;
        let opTwoMultiplication = document.getElementById("op-two").value;
        let result = parseInt(opOneMultiplication) * parseInt(opTwoMultiplication);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let opOneDivision = document.getElementById("op-one").value;
        let opTwoDivision = document.getElementById("op-two").value;
        let result = parseInt(opOneDivision) / parseInt(opTwoDivision);
        alert(result);
    });
})();
