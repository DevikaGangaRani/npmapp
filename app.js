const _ = require('lodash');

const numbers = [33, 46, 51, 42, 75, 86, 99];

_.each(numbers, function (number, i) {
  console.log(number);
});
