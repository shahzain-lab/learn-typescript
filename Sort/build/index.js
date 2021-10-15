"use strict";
exports.__esModule = true;
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var numberCollection = new NumberCollection_1.NumberCollection([200, -4, -34, 34]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
