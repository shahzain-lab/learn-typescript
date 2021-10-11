
// variable annotations: Code we add to tell typescript what type of value a variable will
// refer to. We can specify the type using :Type after the name of the variable, parameter or property.

// VARIABLE_ANNOTATIONS

const apples: number = 5;

let myName: string = 'zain';
myName = 'shahzain';

const hasName: boolean = true;

//get ERROR
// const nothing: undefined = '';

const nothing: undefined = undefined;

//Built in Objects

let now: Date = new Date();
now.getMonth();

console.log(now);

// whats about other
// ARRAY:
const students: string[] = ['john', 'miller', 'jane'];
const ages: number[] = [23, 45, 65, 34];
const areYouThere: boolean[] = [true, false, true, false]


// CLASSES:
class Car {

}
const car: Car = new Car();

// OBJECTS
const user: {first: string, age: number} = {
    first: 'shahzain',
    age: 16
}

// FUNCTION
const foo:(age: number) => void = (age: number) => {
    console.log(age);
}


// ___when to use type annotatios___
// 1) Function that returns 'any' type.
const json = '{"x": 3, "y": 5}';
const coordinate = JSON.parse(json); // annotations : { x: number; y: number }
console.log(coordinate);
 

// 2) when we declare a varable on one line and initialize it later.
const names: string[] = ['jane', 'miller', 'mike', 'smith']
let isMiller; // annotation: boolean

for(let i = 0; i < names.length; i++){
    if(names[i] === 'miller'){
        isMiller = true;
    }
}
