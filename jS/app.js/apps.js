var fruits = ['apples','grapes', 'oranges'];
console.log(fruits[1]);


var person = {
age: 38,
name: "lacie",
getAge: function(){
    console.log (this.age);
}
};
console.log();
person.getAge();

function test() {
console.log('some string');
console.log (2);
}
test();