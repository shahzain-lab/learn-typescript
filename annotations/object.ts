
// OBJECT_ANNOTATION
// simple object
const user1: { name: string, age: number } = {
    name: 'zain',
    age: 16,
}
console.log(user1.name);


// destracturing
const teacher = {
    firstName: 'Mike',
    age: 60,
    subject: 'computer',
    coords: {
        lat: 3,
        lng: 5
    }
}

const { firstName }: { firstName: string } = teacher;
console.log(firstName);

// nested destracturing

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = teacher;
console.log(lat, lng);


// Array

const arr: (string | boolean | number )[] = ['shahzain' , true , 'zain', 'hello', 200, 300];

const arr2: (string | number | (string | boolean)[])[] = ["zain", ["shahzain", 'zain', false], 300, 150]