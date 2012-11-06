module.exports = function atFloatToString(number) {
  // undefined returns 0
  if (number === undefined) {
    return 0;
  }

  // interpret strings as numbers (THIS IS JAVASCRIPT ... *troll*)
  if (typeof number === 'string') {
    number = parseFloat(number);
  }

  // Not sure if this is correct, but it works for the example provided in
  // the drone manual ... (should be revisted)
  var buffer = new Buffer(4);
  buffer.writeFloatBE(number, 0);
  return -~parseInt(buffer.toString('hex'), 16) - 1;
};