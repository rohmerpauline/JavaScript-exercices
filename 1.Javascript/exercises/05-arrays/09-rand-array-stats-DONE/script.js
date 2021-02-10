/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        // To generate a array of 10 random number
        let arrayOfNumbers = [];
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random()*100)+1;
            arrayOfNumbers.push(randomNumber);
        }

        // To place the array item in the table
        for (let nx = 0; nx < 10; nx++) {
            document.getElementsByTagName("td")[nx].innerHTML = arrayOfNumbers[nx];
        }

        // To display the minimum 
        document.getElementById("min").innerHTML = Math.min(...arrayOfNumbers);

        // To display the maximum
        document.getElementById("max").innerHTML = Math.max(...arrayOfNumbers);

        // To calculate the sum of the array's elements
        add = function (arrayOfNumbers) {
        return arrayOfNumbers.reduce((a,b) => a + b, 0); 
        };

        // To display the sum 
        document.getElementById("sum").innerHTML = add(arrayOfNumbers);

        // To display the average
        document.getElementById("average").innerHTML = add(arrayOfNumbers)/10;

    })

})();
