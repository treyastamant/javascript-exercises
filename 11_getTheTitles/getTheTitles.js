const getTheTitles = function(object) {
let titles = [];
for (let i = 0; i < object.length; i++) titles.push(object[i].title);
return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
