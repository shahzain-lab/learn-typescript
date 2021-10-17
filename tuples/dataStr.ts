

// Tupples: Array-like structure where each element represent property of some records;

// in simple object:
const table1 = {
    color: 'white', 
    height: 20,
    isWide: true
}

// in tupple, but some lake of informative object keys:
const table: [string, number, boolean] = ["white", 20, true ];

// using alias
type Drink = [string, number, boolean];

const coca: Drink = ['brown', 40, false];

// in arrays

let iam: [string, number, boolean ];

iam = ['zain', 23, false]