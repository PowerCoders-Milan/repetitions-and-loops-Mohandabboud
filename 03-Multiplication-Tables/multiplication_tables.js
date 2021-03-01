// write your code below

for (var number =0 ; number <= 10 ; number++) {
   var result = number * 9;
    console.log(number + " * 9 = "+ result);
}

// 2nd request
function number (num, n) {
    var num = prompt("write your number");
    for (var n = 0 ; n <= 10 ; n++) {
     var result = num * n;
        console.log(num + " * " + n + " = "+result);
        window.alert(num + " * " + n + " = "+result);
 }
}

number();