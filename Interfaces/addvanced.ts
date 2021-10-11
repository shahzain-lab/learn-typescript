// we will see code'refactoring using interfaces
interface ReportAble{
    summary(): string
}

const drink = {
    name: 'coca-cola',
    sugar: 40,
    summary() {
        return `${this.name} has ${this.sugar} gram sugar.`
    }
}

const ford = {
    model: 'F150',
    year: 2015,
    summary() {
        return `${this.model} launch in ${this.year}.`
    }
}

// Here, interface act as a gateKeeper of printSummary().if one of the object's 
// property matches the interface, then it will pass to printSummary();

const printSummary = (item: ReportAble): void => {
    console.log(item.summary());   
}

printSummary(drink);
printSummary(ford);