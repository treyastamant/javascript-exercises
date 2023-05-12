const findTheOldest = function (people) {
  let currentYear =  new Date().getFullYear();
  let ages = [];
  let megaMax;
  for (let i = 0; i < people.length; i++) {
    let age = (people[i].yearOfDeath || currentYear) - people[i].yearOfBirth;
    ages.push(age);
    const max = Math.max(...ages);
    if (max === age) megaMax = people[i];
  }
  return megaMax;
};

// Do not edit below this line
module.exports = findTheOldest;
