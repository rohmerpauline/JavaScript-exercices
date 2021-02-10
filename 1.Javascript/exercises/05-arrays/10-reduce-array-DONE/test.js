let test = [1, 2, 3, 4, 5];
add = function (test) {
    return test.reduce((a,b) => a + b, 0); 
};

let sum = add(test);
console.log(sum);