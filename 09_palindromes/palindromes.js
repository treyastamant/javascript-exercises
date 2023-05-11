const palindromes = function (str) {
  let string = str.toLowerCase().replace(/[^\w]/g, '');
  return string.split('').reverse().join() == string.split('').join() ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
