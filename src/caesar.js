// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  
    function caesar(input, shift, encode = true) {
      let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let codedMessege = [];
      let codedMessegeArray = [];
      let uncodedMessegeArray = input.toLowerCase().split('');
      let index = 0;
      if(shift === 0 || shift < -25 || shift > 25){
          return false;
        }
      console.log(uncodedMessegeArray);
     if(encode === true){
        
      uncodedMessegeArray.forEach((letter)=>{
        index = alpha.indexOf(letter);
        let total = index + shift;
        if(total > 25){
          total = total - 26;
        }else if(total < 0){
          total = total + 26;
        }

        if(alpha.includes(letter)){
            codedMessegeArray.push(alpha[total]);
        }else if(!alpha.includes(letter)){
          codedMessegeArray.push(letter);
        }
      });
      codedMessege = codedMessegeArray.join('');
      return codedMessege;
      
    }else{
              
      
      uncodedMessegeArray.forEach((letter)=>{
        index = alpha.indexOf(letter);
        let total = index - shift;
        if(total > 25){
          total = total - 26;
        }else if(total < 0){
          total = total + 26;
        }

        if(alpha.includes(letter)){
            codedMessegeArray.push(alpha[total]);
        }else if(!alpha.includes(letter)){
          codedMessegeArray.push(letter);
        }
      });
      codedMessege = codedMessegeArray.join('');
      return codedMessege;
      
      
      
      
      
    }
      }                       
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
