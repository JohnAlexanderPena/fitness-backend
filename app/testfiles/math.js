const math = {};
math.add = async (num1, num2) => {
  try {
    if (num1 && num2) {
      const result = (await num1) + num2;
      return result;
    } else {
      throw "inside the throw meth";
    }
  } catch (err) {
    throw err;
  }
};
module.exports = math;
