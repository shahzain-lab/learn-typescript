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

interface Printable{
    print(ind: number): void
}

class IterableNumber<T>{
    constructor(public collection: T[]) {};

    printNums(): void{
        for(let i = 0; i < this.collection.length; i++){
        }
    }
}

const iteration = new IterableNumber([23, 45, 75, 23, 32])