/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const table = document.createElement("table");
    let tableMultiplication = [];
    let tableHeadings = ["Table de 1", "Table de 2", "Table de 3", "Table de 4", "Table de 5", "Table de 6", "Table de 7", "Table de 8", "Table de 9", "Table de 10"];
    let tablenumberXOne = [];
    let tablenumberXTwo = [];
    let tablenumberXThree = [];
    let tablenumberXFour = [];
    let tablenumberXFive = [];
    let tablenumberXSix = [];
    let tablenumberXSeven = [];
    let tablenumberXEight = [];
    let tablenumberXNine = [];
    let tablenumberXTen = [];

    // your code here
    for (i=1; i<=10; i++) {
        tablenumberXOne.push(`${i} x 1 = ${1*i}`);
        tablenumberXTwo.push(`${i} x 2 = ${2*i}`);
        tablenumberXThree.push(`${i} x 3 = ${3*i}`);
        tablenumberXFour.push(`${i} x 4 = ${4*i}`);
        tablenumberXFive.push(`${i} x 5 = ${5*i}`);
        tablenumberXSix.push(`${i} x 6 = ${6*i}`);
        tablenumberXSeven.push(`${i} x 7 = ${7*i}`);
        tablenumberXEight.push(`${i} x 8 = ${8*i}`);
        tablenumberXNine.push(`${i} x 9 = ${9*i}`);
        tablenumberXTen.push(`${i} x 10 = ${10*i}`);
    }
    tableMultiplication.push(tablenumberXOne, tablenumberXTwo, tablenumberXThree, tablenumberXFour, tablenumberXFive, tablenumberXSix, tablenumberXSeven, tablenumberXEight, tablenumberXNine, tablenumberXTen);

    table.createCaption().textContent = "Tables de multiplication";

    const hrow = table.insertRow(-1);
    for (heading of tableHeadings) {
        hrow.insertCell(-1).innerHTML = heading;
    }
    for (let i = 0; i < tableMultiplication.length; i++) {
    const drow = table.insertRow(-1);
        for (tablemulti of tableMultiplication) {
            drow.insertCell(-1).innerHTML = tablemulti[i];
        }
    } 
    document.getElementById("target").appendChild(table);
    
    console.log(tableMultiplication);

})();
