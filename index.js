console.log("Person Object Testing");

var express = require('express');

// require the module
var person = require('./person_module.js');

// create objects from the module
var tyler = person(1, 'Tyler', 'Reed');
var brandon = person(2, 'Brandon', 'Reed');
var will = person(3, 'Will', 'IaM');

// create array and push the objects onto it
var personArray = [];
personArray.push(tyler, brandon, will);

// loop through the array with foreach function
personArray.forEach(function(item, index, array) {
  console.log(item.getInfo());
});

console.log(tyler.getId());
