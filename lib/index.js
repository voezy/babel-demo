"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.includes.js");

var animals = ['cat', 'dog'];

var findAnimal = function findAnimal(animal) {
  console.log("".concat(animal, " ").concat(animals.includes(animal) > -1 ? 'exist.' : 'does not exist.'));
};

findAnimal('cat');