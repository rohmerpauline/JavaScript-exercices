/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const table = document.createElement("table");
    table.createCaption().textContent ="Elements";
    for (let i=1; i<=10; i++) {
        let hrow = table.insertRow();
        hrow.insertCell(-1);
    };
    document.getElementById("target").appendChild(table);
})();
