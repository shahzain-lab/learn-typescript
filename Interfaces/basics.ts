
// Interfaces: creates  new type (A custom type), that are used to describe property names and  value types of an object.
// interface
interface User{
    name: string,
    age: number,
    isAdult: boolean
}

const mike = {
    name: 'mike',
    age: 20,
    isAdult: true
}


const printUser = (user: User) => {
    console.log(`I'm ${user.name}, and I'm ${user.age} year old.`);
}

printUser(mike);

// interface
interface Vehicle{
    model: string,
    colors: string[],
    summary(): void
}

const toyota = {
    model: 'corolla',
    colors: ["brown", "black", "dark"],
    summary() {
        console.log(`I bought ${this.colors[1]} ${this.model}`);
    }
} as Vehicle;

toyota.summary()