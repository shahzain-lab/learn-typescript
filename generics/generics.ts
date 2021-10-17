class ArrOfString{
    constructor(public collection: string[]) {};

    get(ind: number): string{
        return this.collection[ind]
    }
}


class ArrOfNumber{
    constructor(public collection: number[]) {};

    get(ind: number): number{
        return this.collection[ind]
    }
}

// Generics

class getAll<T>{
    constructor(public collection: T[]) {};

    get(ind: number): T{
        return this.collection[ind];
    }
}

const insOfString = new getAll(["Hello", "Hi", "Hi there!"]);
const insOfNumber = new getAll([34, 53, 52, 73, 23]);

// more on generics


const cars = <T, Y> (arg: T[], total: Y) => {
    return `Total cars ${total}: ${arg.toString()}`;
}

const allCars = cars(["Ford", "BMW", "Toyota"], 3);

interface Fullname{
    first: string;
    last: string
}

const logIn = <T extends Fullname> (obj: T) => {
    return {
        ...obj,
        fullName: obj.first + ' ' + obj.last
    }
}

const john = logIn({first: 'john', last: 'alia'});



