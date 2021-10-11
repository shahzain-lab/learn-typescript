// function_annotations: code to tell the typescript what type of argument funtion 
// will recieve and what type of value it return.3
// FUNCTION_ANNOTATIONS
// function expression
var add = function (a, b) {
    return a + b;
};
add(3, 4);
// anonymous function
var subtract = function (a, b) {
    return a - b;
};
subtract(3, 4);
// function declaration
function multiply(a, b) {
    return a * b;
}
multiply(3, 4);
// VOID
var nothingToReturn = function (a, b) {
    a + b;
};
nothingToReturn(3, 4);
