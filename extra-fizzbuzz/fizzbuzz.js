

for (i = 1 ; i <= 100 ; i++)  {
    if (i % 3 == 0) {
    if ( i % 5 == 0) {
      console.log("fizzbuzz")   
    } else {console.log("fizz")}
}
    else if (i % 5 == 0) {
        if ( i % 3 == 0) {
         console.log("fizzbuzz")   
        } else {console.log("buzz")}
      }
    if (i % 3 > 0 && i % 5 > 0) {
        console.log(i)
    }
}