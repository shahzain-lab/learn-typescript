// OBJECT_ANNOTATION
// simple object
var user1 = {
    name: 'zain',
    age: 16
};
console.log(user1.name);
// destracturing
var teacher = {
    firstName: 'Mike',
    age: 60,
    subject: 'computer',
    coords: {
        lat: 3,
        lng: 5
    }
};
var firstName = teacher.firstName;
console.log(firstName);
// nested destracturing
var _a = teacher.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
