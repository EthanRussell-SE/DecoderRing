// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let poly = [['A','F','L','Q','V'] , ['B','G','M','R','W'], ['C','H','N','S','X'], ['D','(I/J)','O','T','Y'], ['E','K','P','U','Z']];
    let inputChars = input.toUpperCase().split('');
    let result = [];
    let count = 0;
    if(encode === true){
      inputChars.forEach((inputChar)=>{

        poly.forEach((col, colIndex)=> {
          col.forEach((charValue, rowIndex)=> {

              if(charValue.includes(inputChar)){
                result.push("" + (colIndex + 1) + (rowIndex + 1));
              }else if(inputChar === " " && count === 0){
                result.push(" ");
                count++;
              }
              
            
          
          
            })
        
        })
      })
 
      return result.join('');
      
  }else {
    let stringResult = "";
    if(input.length === 0){
       //realDecodeInputCols.push(char);
        return false;
      
       }else {
         
          //realDecodeInputRows.push(char);
         stringResult = decodePolybius(input,poly);
        }
       
       return stringResult;
    //change the number string into array
    //loop thru the array of input, then see if the array of input and +1 is the same with the poly array and keep going until we find it then, push the value of poly array into the result.
      
      
    }
  }
    function decodePolybius(input,poly){
      const decodeInputChars = input.split('');
      let result = "";
      const numbers = "0123456789";
      
      for(let i = 0;i < decodeInputChars.length;i+=2){
        //console.log(decodeInputChars[i]);
        if(!numbers.includes(decodeInputChars[i])){
          
          result += " ";
          
          i--;
          }else{
            
          
        let col = parseInt(decodeInputChars[i],10);
        let row = parseInt(decodeInputChars[i + 1],10);
        //console.log("input = ",input);
        //console.log("col = ",col);
       // console.log("row = ",row);
        //console.log("poly[col][row] = ",poly[col -1][row-1]);
        
          result += poly[col - 1][row - 1];
            if(poly[col - 1][row - 1] === undefined){
              return false;
            }
          }
      }
      
      return result.toLowerCase();
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
