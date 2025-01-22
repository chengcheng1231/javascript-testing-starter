import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA rule
    // Arrange: ex: Turn on the TV
    const a = 2;
    const b = 1;

    // Act: Press the power button
    const result = max(a, b);
    // Assert: Verify TV is off
    expect(result).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the fist argument if arguments are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return Fizz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return itself", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
