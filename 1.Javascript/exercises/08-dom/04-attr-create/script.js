/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let imgSource =document.getElementById("source").dataset;
    console.log(imgSource);
    let img = document.createElement("img");
    img.src = imgSource;
    document.getElementById("target").appendChild("img");
    
    
})();
