/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("pass-one").addEventListener("input", function(){
        let passwordCheck = document.getElementById("pass-one").value;
        let strongPassword = new RegExp("^(?=.*[0-9]{2})(?=.{8,})");
        if (strongPassword.test(passwordCheck)) {
            document.getElementById("validity").innerHTML = "Ok";
        } else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }
    })
})();
