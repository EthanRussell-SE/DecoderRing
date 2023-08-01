const {expect} = require("chai");
const {polybius} = require("../src/polybius");
//should encode a message by translating each letter to number pairs
//should translate both 'i' and 'j' to 42
//should leave spaces as is

describe("Encoding tests", () => {
  
  it("should encode a message using the polybius square", () => {
    const expected = "4432423352125413";
    const actual = polybius("Thinkful");
    expect(actual).to.equal(expected);
  })
  
  it("should translate both i and j to 4,2", () => {
    const expected = "4432423352125413";
    const actual = polybius("Thinkful");
    expect(actual).to.equal(expected);
  })
    it("should leave spaces", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  })
})

describe("Decoding tests", () => {
  
  it("should decode a message using the polybius square and spaces", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341",false);
    expect(actual).to.equal(expected);
  })
  
  it("should translate both i and j to 4,2", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413",false);
    expect(actual).to.equal(expected);
  })
    it("return false if numbers are odd", () => {
    const expected = false;
    const actual = polybius("443242335212541",false);
    expect(actual).to.equal(expected);
  })
})