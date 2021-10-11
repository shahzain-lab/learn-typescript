var mike = {
    name: 'mike',
    age: 20,
    isAdult: true
};
var printUser = function (user) {
    console.log("I'm " + user.name + ", and I'm " + user.age + " year old.");
};
printUser(mike);
var toyota = {
    model: 'corolla',
    colors: ["brown", "black", "dark"],
    summary: function () {
        console.log("I bought " + this.colors[1] + " " + this.model);
    }
};
toyota.summary();
