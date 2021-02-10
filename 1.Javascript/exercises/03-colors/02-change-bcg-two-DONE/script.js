/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let colorName = document.getElementById("color").value;
        if (colorName == "red") {
            document.body.style.backgroundColor = "red";
        } else if (colorName == "green") {
            document.body.style.backgroundColor = "green";
        } else if (colorName =="yellow") {
            document.body.style.backgroundColor = "green";
        } else if (colorName =="blue") {
            document.body.style.backgroundColor = "green";
        } else {
            alert("Please choose between red, green, yellow or blue")
        }
    });
})();
