// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("Checking equality", () => {
  it("should return the encoded word", () => {
    
    const expected = "wklqnixo";
    const actual = caesar("thinkful",3);
 expect(actual).to.equal(expected);
  });
  
  
  it("should return the encoded with spaces", () => {
    
    const expected = "pb phvvdjh";
    const actual = caesar("my message", 3);
    expect(actual).to.equal(expected);
    
  });
  
  it("should return false if there is no amnt passed to function", () =>{
    const expected = false;
    const actual = caesar("thinkful",0);
     expect(actual).to.equal(expected);
  });
  it("should return false if shift is more than 26 or less then 26", () =>{
    const expected = false;
    const actual = caesar("yuurr", -27);
    expect(actual).to.equal(expected);
    
  })
  
    it("still work if capital letters", () =>{
    const expected = "wklqnixo";
    const actual = caesar("THINKFUL", 3);
    expect(actual).to.equal(expected);
    
  })
      it("still works with negative shifts", () =>{
    const expected = "qefkhcri";
    const actual = caesar("thinkful",-3);
    expect(actual).to.equal(expected);
    
  })
  
  describe("decode check", () => {
    it("should decode regularly", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo",3,false);
    expect(actual).to.equal(expected);
    })
    
    it("should decode negative shifts and spaces", () => {
      const expected = "this is a secret message!";
      const actual = caesar("xlmw mw e wigvix qiwweki!",4,false);
      expect(actual).to.equal(expected);
    })
    
    it("should keep spaces fine", ()=> {
      
    })
    it("should be cool with capital letters",()=> {
      
    })
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});