var drink = {
    name: 'coca-cola',
    sugar: 40,
    summary: function () {
        return this.name + " has " + this.sugar + " gram sugar.";
    }
};
var ford = {
    model: 'F150',
    year: 2015,
    summary: function () {
        return this.model + " launch in " + this.year + ".";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(drink);
printSummary(ford);
