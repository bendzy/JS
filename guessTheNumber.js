while (numberOfAttempts <5) {
  
 while (userNumber <= 0 || isNaN(userNumber) || typeof userNumber === "boolean" ) {
  userNumber =  parseInt(prompt("Please enter the number"));
}

  numberOfAttempts++;
  
    if (userNumber == randomNumber) {
      if(numberOfAttempts == 1) {
        console.log("Cestitamo zadeli ste v 1 poskusu!");
        break;
      }
      else{
      console.log("Bravo ! Zadeli ste stevilo :"+randomNumber )
      userNumbers.push(userNumber);
      console.log("stevilo ste zadeli v :"+numberOfAttempts+" poskusu , vsa števila v prejšnjih poskusih so :"+userNumbers.toString()+" ");
      break;
      }
     }
    
    else if (userNumber > randomNumber) {
      console.log("Napacno stevilo ! Stevilo, ki ga poskusate ugotoviti je manjse od vnesenega  stevila .");
      userNumbers.push(userNumber);
      userNumber = 0;
    }
    else  {
        console.log("Napacno stevilo ! Stevilo, ki ga poskusate ugotoviti je vecje od vnesenega stevila .");
      userNumbers.push(userNumber);
      userNumber = 0;
    }
}

if(numberOfAttempts == 5) {
console.log("Zal vam ni uspelo ugotoviti stevila . Stevilo, ki smo ga iskali je :"+randomNumber+" . Vase poskusi pa so bili :"+userNumbers.toString());
}