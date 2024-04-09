const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzbuzz'

/**
 * Returns true when num is a multiple of three.
 * @param {Number} num
 * @returns {Boolean} fizz
 */

function isFizz(num) {
  return num % 3 === 0;
}

/**
 * Returns true when num is a multiple of five.
 * @param {Number} num
 * @returns {Boolean} buzz
 */

function isBuzz(num) {
  return num % 5 === 0;
}

/**
 * Returns true when num is multiple of three, five, or both.
 * @param {Number}
 * @returns {String} '', 'FIZZ', 'BUZZ', 'FIZZBUZZ'
 */

function fizzbuzzCheck(num) {
  let res = '';
  if (isFizz(num)) {
    res += FIZZ
  }
  if (isBuzz(num)) {
    res += BUZZ
  }
  return res;
}

/**
 * Returns an object listing the values for all properties of count.
 * @param {Number} count
 * @returns {Object} properties: count, fizz, buzz, fizzbuzz
 */

function handleFizzbuzz(count) {
  let res = {
    count,
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0
  }

  for (let i = 1; i <= count; i += 1) {
    const val = fizzbuzzCheck(i);

    switch (val) {
      case FIZZ:
        res.fizz += 1
        break
      case BUZZ:
        res.buzz += 1
        break
      case FIZZBUZZ:
        res.fizzbuzz += 1
        break
    }
  }
  return res
}

module.exports = {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
  isFizz,
  isBuzz,
  fizzbuzzCheck,
  handleFizzbuzz
}
