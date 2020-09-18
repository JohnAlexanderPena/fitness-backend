const assert = require("assert");
// const { expect } = require("chai");

// //Describe the test being run
// describe("Simple mocha Test", () => {
//   //Describe the result being returned
//   it("Should return 12", () => {
//     var a = 2;
//     var b = 10;
//     //Check the actual return
//     assert.equal(a + b, 12);
//   });
// });

const expect = require("chai").expect;
describe("Simple Math Test", () => {
  it("should return 2", () => {
    expect(1 + 1).to.equal(2);
  });
  it("should return 9", () => {
    expect(3 * 3).to.equal(9);
  });
  it("Should be return true", () => {
    expect(1 + 1).to.equal(2);
  });
  it("Should return 25", () => {
    expect(5 * 5).to.equal(25);
  });
});
