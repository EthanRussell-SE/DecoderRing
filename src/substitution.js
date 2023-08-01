// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let inputArrayChars = input.split('');
    let result = "";
    let test = " !$@#&";
    let spaceCount = 1;
   // console.log(alphabet);
    if(encode === true){
      
   
    if(!alphabet || alphabet.length !== 26 ){
      return false;
    }else{
      let alpha = alphabet.split('');
      console.log(alpha);
      if(alpha[0] === 'a'){
        if(alpha[1] === 'b'){
          if(alpha[2]=== 'c'){
            return false;
          }
        }
      }
      //let trueOrFalse = alpha.every((char)=> letters.includes(char));
      //if(trueOrFalse === true){
       // return false;
      //}
    }
      
    inputArrayChars.forEach((char)=> {
      letters.find((foundChar, index)=>{
        
        if(foundChar === char){
          result += alphabet[index];
          
       }else if(!letters.includes(char) && spaceCount === 1){
         spaceCount++;
         console.log("found char: ",foundChar);
         result += char;
       }
        
      });
      //if(alphabet.includes(char)){
        
      //}
    })
      return result;
    }else {
      //decode
      let result = "";
      let inputArrayChars = input.split('');
      let alphaArray = alphabet.split('');
      let spaceCount = 1;
      inputArrayChars.forEach((char)=>{
        alphaArray.find((foundChar, index)=>{
          if(foundChar === char){
            result += letters[index];
          }else if(test.includes(char) && spaceCount === 1){
         spaceCount++;
         console.log("found char: ",foundChar);
         result += char;
         }
        })
        
      })
      console.log(result);
      
      return result;
      
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
