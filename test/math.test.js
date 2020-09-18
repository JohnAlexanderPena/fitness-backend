const expect = require("chai").expect;

// const expect = require("mocha");
// const assert = require("assert");

// import math file
const math = require("../app/testfiles/math");
describe("math.js tests", () => {
  describe("math.add() Test", () => {
    it("should equal 2", async () => {
      //   const result = await math.add(1, 1);
      //   expect(result).to.equal(2);
      math.add(1, 1).then((result) => expect(result).to.equal(2));
    });
    it("should equal 4", () => {
      const result = math.add(2, 2);
      expect(result).to.equal(4);
      //   assert(result, 4);
    });

    //Test Error Handling;
    it("should throw an error", async () => {
      try {
        await math.add(1);
      } catch (error) {
        expect(error).to.equal("inside the throw meth");
      }
    });
  });

  describe("math.multiply() Test", () => {
    it("should equal 3", () => {
      const result = math.multiply(3, 1);
      expect(result).to.equal(3);
      //   assert(result, 3);
    });
    it("should equal 10", () => {
      const result = math.multiply(5, 2);
      expect(result).to.equal(10);
      //   assert(result, 10);
    });
  });
});
