const fizzbuzz = require("./index")

describe("fizzbuzz()", () => {
  it('returns "fizzbuzz" for multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz")
    expect(fizzbuzz(30)).toBe("fizzbuzz")
    expect(fizzbuzz(5)).toBe("buzz")
  })

  it("return the given number for multiples of neither 3 nor 5", () => {
    expect(fizzbuzz(4)).toBe(4)
    expect(fizzbuzz(22)).toBe(22)
  })

  it("returns fizz if given the number 3", () => {
    expect(fizzbuzz(3)).toBe("fizz")
  })

  it("returns buzz if given the number 5", () => {
    expect(fizzbuzz(5)).toBe("buzz")
  })
})