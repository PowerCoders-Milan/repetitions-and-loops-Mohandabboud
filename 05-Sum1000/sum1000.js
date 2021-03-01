 
 var x = 3;
var y = 5;
var sum = 0;
var sum4 = 0;

// 1st way
for ( i =1 ; sum <1000 ; i++) {
    sum1 = x*i;
    sum2 = y*i;
    sum = sum + sum1 +sum2;
    if (sum > 1000) {
        sum1 = x*i;
        sum2 = y*i;
    }
}
sum = sum - sum1 -sum2;
console.log(sum);

// 2nd way

for ( i = 0 ; i <1000 ; i++) {
    if (i % 3 == 0 || i % 5 == 0){
    sum4 += i
}}
console.log(sum4);