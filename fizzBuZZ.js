var meja =0;

while (meja <= 0 || isNaN(meja) || typeof meja === "boolean" ) {
  meja =  parseInt(prompt("Please enter the number"));
}

for(var i=0; i<=meja; i++) {
  
  if(i%3 == 0 ) {
    console.log("fiZZ");
  }
  else if (i % 5 == 0) {
    console.log("buZZ");
  }
  else if ( (i % 3 == 0) && (i% 5 == 0) ) {
    console.log("fiZZbuZZ");
  }
  else {
    console.log(i);
  }
}


var randomNumber = 10;
var userNumbers = [];
var numberOfAttempts = 0;
var userNumber = 0;