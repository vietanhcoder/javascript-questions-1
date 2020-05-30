// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

//Tạo ra 1 mẫu khởi tạo, cũng là tạo ra 1 prototype object
// function Person(_age, _name) {
//   this.age = _age;
//   this.name = _name;
// }

// //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
// Person.prototype.height = 0;

// //Tạo ra 1 instance của Person
// //Có cả 3 thuộc tính của mẫu khởi tạo Person
// var jack_person = new Person(10, "Jack");
// for (var att in jack_person) {
//   console.log(att);
// }

// //Xem đối tượng prototype của instance vừa tạo
// jack_person.__proto__;

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: 123,
// };
// console.log(mouse[bird.size]); //123

// boolean, strings, numbers, symbols, null, undefined
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// setInterval(() => console.log("Hi"), 1000);
//
function* generator(i) {
  yield i;
  yield "keep";
  yield "walking";
  yield "baby,";
  yield "I infinitely believe that you will achieve your goals";
}

const gen = generator("hello");

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
