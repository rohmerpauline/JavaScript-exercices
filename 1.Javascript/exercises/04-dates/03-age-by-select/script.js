/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
        let dayValue = document.getElementById("dob-day").value;    
        let monthValue = (document.getElementById("dob-month").value);
        let yearValue = document.getElementById("dob-year").value;
        let newDate = new Date();
        let age = newDate.getFullYear() - parseInt(yearValue);
        let month = newDate.getMonth() - parseInt(monthValue);
        let day = newDate.getDate()- parseInt(dayValue);
        let ageReal;
    if ((month < -1) || (month == -1 && day < 0)) {
        ageReal = age-1;
        alert(ageReal);
    } else if ((month > -1) || (month == -1 && day >= 0)) {
        alert(age);
    }    
    });
})();
