//object oefening
let person = {
    name: 'Ben',
    age: 43,
    evaluations: [7, 10, 9]
};

let selection = 'name';
person[selection] = 'Jenni';

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.evaluations)

//array oefening

let selectionColors = ['green', 'blue', 'red'];

selectionColors.push('yellow');
selectionColors.push(5)
selectionColors.push(
    greeting = 'Hi, I am an object'
);

let lastSelectionColors = selectionColors[selectionColors.length -1];

console.log(selectionColors);
console.log(selectionColors[0]);
console.log(lastSelectionColors);

console.log(greeting)