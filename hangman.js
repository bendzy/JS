var words =["program","skripta","telefon","monitor","tipkovnica","slusalke","printer"];

var guessingWord = words[Math.floor(Math.random()* words.length) + 1]; //beseda ki jo ugibamo

var blankWord ="";
var attempts = 0;
var allChars = [];
var trueWord = guessingWord;
var mixedWord ="";
var wordHit = false;
var inputPattern=/^[a-zA-Z]+$/;
var input ;

 blankWord = toStars(guessingWord); // beseda ki se spremeni v zvezdice odvisno od dolzine guessingWorda
 mixedWord = toStars(guessingWord); // prav tako se spremeni, kasneje potrebna za izpis v iteracijah

while (attempts < 10) {
  //vpis crke v variable
    
    var tmp = prompt("Poskus st :"+(attempts+1)+ ". Prosim vpisite crko ali besedo : ");
  
    // ce je vnesena ena crka
    if (tmp.length == 1 && inputPattern.test(tmp)) {
    
    input = tmp.charAt(0);
  
  
    allChars.push(input); //dodamo v tabelo, kjer hranimo uporabnikove crke in nize
  
    var re = new RegExp(input,"g");
    var newStr = guessingWord.replace(re,"*");
    
    var index =[];
    var chars =[];
    var i = 0;
   
    var hit = false;
  // zapomnimo si indexe kjer imata oba niza zvezdice
    while ( i < newStr.length) {
      if ( blankWord.charAt(i) == newStr.charAt(i) ) {
        index.push(i); //zapomnimo si index zvezdice kjer sta niza enaka
        chars.push(trueWord[i]); //zapomnimo si crko na mestu kjer sta dve zvezdice enake
        hit = true; // shranimo da smo imeli zadetek
      }
      i++;
    }

  if (hit) {
    console.log("Poskus st : "+(attempts+1)+" ugotovili ste crko v besedi");
      //zamenjamo zvezdice s crkami potrebno je se 
      for(var i = 0; i < index.length ; i++ ) {
        mixedWord = setCharAt(mixedWord,index[i],chars[i]);
      } 
    //ponastavimo vse na 0
    index.length = 0;
    chars.length = 0;
    hit = false;
    
    if (mixedWord == trueWord) {
      console.log("Cestitamo ugotovili ste besedo v "+(attempts+1)+" poskusu!!! Iskana beseda je :" +trueWord );
      wordHit = true;
      break;
    }

    console.log(mixedWord);
  }
  
  else {
    console.log(" Poskus st : "+(attempts+1)+" niste ugotovili crke, poskusite ponovno !");
    console.log(mixedWord);
    
  }
 }
  //ce je vnesena beseda
  else {
    if(tmp == guessingWord && inputPattern.test(tmp)) {
      console.log("Ugotovili ste besedo "+guessingWord);
      wordHit = true;
      break;
      
      
    }
    console.log("Poskus st : "+(attempts+1)+" Vpisana besede ni prava ! ");
    allChars.push(tmp);
  }
  
  attempts++;
}


//izpis  ce ugotovimo besedo
if ( !wordHit ) { 
    var tmpniz = "";
    //end section 
    console.log("Zal niste ugotovili besede v : "+(attempts+1)+" poskusih.");
    console.log("Beseda, ki smo jo iskali je : "+trueWord);
      for( var i = 0; i < allChars.length ; i++) {
        tmpniz +=allChars[i]+" ";
      }
     console.log("Vaše črke so bile :"+tmpniz);

}






function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


function toStars( word) {
  var niz="";
  for (var i = 0; i<word.length;i++) {
    niz +="*";
  }
  return niz;
}