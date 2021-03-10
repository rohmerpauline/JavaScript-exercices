/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("pass-one").addEventListener("input", function(){
        let passwordCheck = document.getElementById("pass-one");
        passwordCheck.maxLength = 10;
        for (let i=0; i<=10; i++) {
            if (passwordCheck.value.length == i) {
                document.getElementById("counter").innerHTML = `${i}/10`;
            };
        };
    });
    
    // your code here
})();
