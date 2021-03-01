// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen

 // var number = 0;
 // if (number % 2 == 0 && number < 20) {
  //  console.log( number +" is even");    
  //} else  {
    //console.log( number +" is odd");
//
  //}
  //number++;
  //return

  for (var number = 0 ; number <= 20 ; number++) {
    if (number % 2 == 0){
    console.log( number +" is even"); 
  }
  else { console.log( number +" is odd");
}
}

// 2nd way

var num = 0;
while (num <= 20 ) {
  if (num % 2 == 0){
    console.log( num +" is even"); 
  }
  else { console.log( num +" is odd");
} 
 num ++
}

// 3rd way
var n = 0;
do {
  if (n % 2 == 0){
    console.log( n +" is even"); 
  }
  else { console.log( n +" is odd");
} 
 n ++
} while (n <= 20 );

