// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
    expect(calculator(["add", 10, 15])).toBe(25);
    // add more tests here...
    expect(calculator(["mul", 10, 15])).toBe(150);
    expect(calculator(["add", 10, 15, 4])).toBe(undefined);
    expect(calculator(["ad", 10, 15, 4])).toBe(undefined);
    expect(calculator(["add", 10, "15"])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect