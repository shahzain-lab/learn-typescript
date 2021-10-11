
// function_annotations: code to tell the typescript what type of argument funtion 
// will recieve and what type of value it return.3

 // FUNCTION_ANNOTATIONS

 // function expression
const add = (a: number, b: number): number => {
    return a + b;
}
add( 3, 4)

// anonymous function
const subtract = function(a: number, b: number): number{
    return a - b;
}
subtract( 3, 4)

// function declaration
function multiply(a: number, b: number): number{
    return a * b;
} 
multiply( 3, 4)

// VOID
const nothingToReturn = (a: number, b: number): void => { // nothing to return: void
    a + b;
}
nothingToReturn( 3, 4)