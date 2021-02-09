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
        let newDate = new Date(); // Ask for today's date
        let age = newDate.getFullYear() - parseInt(yearValue); // Current year - input year
        let month = newDate.getMonth() - parseInt(monthValue); // Current Month - input year -let month = -1 when in the current month BECAUSE getMonth() is a zero based value (where zero indicates the first month of the year)
        let day = newDate.getDate()- parseInt(dayValue); // Current Day number - input day number
        let ageReal;
        // for months after the current month and for the current month but days after the current day
    if ((month < -1) || (month == -1 && day < 0)) {
        ageReal = age-1;
        alert(ageReal);
        // for month after the current month and the current month but days before the current day
    } else if ((month > -1) || (month == -1 && day >= 0)) {
        alert(age);
    }    
    });
})();
