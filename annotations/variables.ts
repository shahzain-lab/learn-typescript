
// annotations: Code we add to tell typescript what type of value a variable will
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