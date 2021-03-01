
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var countNumbers = 0
var countLetters= 0
arr1.forEach( function(item) {
    if (typeof item === "number"){
    countNumbers = countNumbers +1 ;
    } else {
        countLetters = countLetters + 1;
    }
    });
console.log(countNumbers);
console.log(countLetters);



/* result = 0;
var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr3 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];  
arr2.forEach( function(i) {
    var counter = 0;
    arr3.forEach( function(j) {
        if (i == j) {
            counter = counter + 1;
            var result1 = counter;
        }
        
}); 
        result += String(result1);}); 
        console.log(result);
*/




var array2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var frequent = 1;
var number = 0;
var item;

for (var i = 0; i < array2.length; i++) {
    for (var j = i; j < array2.length; j++) {
    if (array2[i] == array2[j]) number++;
    if (frequent < number) {
        frequent = number;
        item = array2[i];
    }
    }

    number = 0;
}

console.log(item + " ( " + frequent + " times ) ");
