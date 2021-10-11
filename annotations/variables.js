// annotations: Code we add to tell typescript what type of value a variable will
// refer to. We can specify the type using :Type after the name of the variable, parameter or property.
// VARIABLE_ANNOTATIONS
var apples = 5;
var myName = 'zain';
myName = 'shahzain';
var hasName = true;
//get ERROR
// const nothing: undefined = '';
var nothing = undefined;
//Built in Objects
var now = new Date();
now.getMonth();
console.log(now);
// whats about other
// ARRAY:
var students = ['john', 'miller', 'jane'];
var ages = [23, 45, 65, 34];
var areYouThere = [true, false, true, false];
// CLASSES:
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// OBJECTS
var user = {
    first: 'shahzain',
    age: 16
};
// FUNCTION
var foo = function (age) {
    console.log(age);
};
// ___when to use type annotatios___
// 1) Function that returns 'any' type
var json = '{"x": 3, "y": 5}';
var coordinate = JSON.parse(json);
console.log(coordinate);
