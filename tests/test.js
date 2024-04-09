const fizzbuzz = require('../fizzbuzz');

test('isFizz', () => {
  expect(fizzbuzz.isFizz(3)).toBe(true)
  expect(fizzbuzz.isFizz(5)).toBe(false)
  expect(fizzbuzz.isFizz(12)).toBe(true)
  expect(fizzbuzz.isFizz(30)).toBe(true)

})

test('isBuzz', () => {
  expect(fizzbuzz.isBuzz(3)).toBe(false)
  expect(fizzbuzz.isBuzz(5)).toBe(true)
  expect(fizzbuzz.isBuzz(65)).toBe(true)
  expect(fizzbuzz.isBuzz(68)).toBe(false)
})

test('fizzbuzzCheck', () => {
  expect(fizzbuzz.fizzbuzzCheck(12)).toBe("fizz");
  expect(fizzbuzz.fizzbuzzCheck(30)).toBe("fizzbuzz");
  expect(fizzbuzz.fizzbuzzCheck(32)).toBe("");
  expect(fizzbuzz.fizzbuzzCheck(55)).toBe("buzz");
})
