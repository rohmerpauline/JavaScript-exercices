/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
let wantCake = prompt("Do you want cake ? yes/no");
if (wantCake == "yes") {
    alert("Congratulations, we love you !");
} else if (wantCake == "no") {
    alert("Come on, you can't refuse cake !");
} else {
    alert("Your answer should be 'yes' or 'no'")
}
})();
