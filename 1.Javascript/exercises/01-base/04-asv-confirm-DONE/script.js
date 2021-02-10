/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let userConfirmation = true;

    function userData(userAge, userSexe, userCity) {
        return userConfirmation = confirm(userAge + ", " + userSexe + ", " + userCity + " Are these information correct ?");
    }
    if (userConfirmation == false) {
        userData ();          
    }

    userData(
        prompt("How old are you ?"),
        prompt("What's your gender ?"),
        prompt("Where do you live ?")
    );
    
})();
