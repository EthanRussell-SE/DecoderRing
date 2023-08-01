const {expect} = require("chai");
const {substitution} = require("../src/substitution");





describe("error checking", () => {
    it("should return false if the substitution alphabet does not contain unique characters", () => {
    const expected = false;
    const actual = substitution("Thinkful","abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const expected = false;
    const actual = substitution("Thinkful","hewwo");
    expect(actual).to.equal(expected);
  })
    it("should return false if the substitution alphabet is missing", () => {
    const expected = false;
    const actual = substitution("Hello world");
    expect(actual).to.equal(expected);
  })
})



describe("encode checking", () => {
    it("should encode a message by using the given substitution alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful","xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  })
  
  it("should work with any kind of key with unique characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message","$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  })
    it("should preserve spaces", () => {
    const expected = "jrufscpw udrxhq";
    const actual = substitution("thinkful is hard","xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  })
})

describe("decode checking", () => {
    it("should decode a message by using the given substitution alphabet", () => {
    const expected = "thinkful";
    const actual = substitution("jrufscpw","xoyqmcgrukswaflnthdjpzibev",false);
    expect(actual).to.equal(expected);
  })
  
  it("should work with any kind of key with unique characters", () => {
    const expected = "dknq";
    const actual = substitution("efgh","$wae&zrdxtfcygvuhbijnokmpl",false);
    expect(actual).to.equal(expected);
  })
    it("should preserve spaces", () => {
    const expected = "thinkful thinkful";
    const actual = substitution("jrufscpw jrufscpw","xoyqmcgrukswaflnthdjpzibev",false);
    expect(actual).to.equal(expected);
  })
})



















