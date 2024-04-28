// // const div1 = document.querySelector("div");
// // let func2;

// // div1.addEventListener("click", (e) => {
// //   console.log(e);
// //   if (func2) {
// //     func2.target.classList.remove("colo");
// //   }

// //   e.target.classList.add("colo");
// //   func2 = e;
// // });

// let user = {
//   name: "merabi",
//   age: 16,
//   func: function () {
//     console.log("bla bla bla");
//   },
// };
// console.log();
// user.func();

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // array.push(11);

// // array.pop();

// // array.unshift(45);

// // array.shift();

// // array.splice(0, 3);

// console.log(array);

// console.log(array.slice(0, 7));

// let array2 = [
//   {
//     name: "merabi",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },

//   {
//     name: "sandro",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },

//   {
//     name: "sandro",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },

//   {
//     name: "sandro",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },

//   {
//     name: "sandro",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },

//   {
//     name: "giorgi",
//     age: 16,
//     func: function () {
//       console.log("bla bla bla");
//     },
//   },
// ];

// console.log(array2);

// array2.forEach((item) => {
//   console.log(item.name);
// });

// let y = array2.find((x) => x.name === "sandro");

// console.log(y);

// let a = array2.filter((x) => x.name === "sandro");

// console.log(a);

let car = {
  model: "mazda",
  color: "blue",
};
console.log(car);

let cars = [
  {
    model: "mazda",
    color: "blue",
  },

  {
    model: "mersedesi",
    color: "black",
  },

  {
    model: "bmw",
    color: "red",
  },

  {
    model: "mazda",
    color: "blue",
  },

  {
    model: "mersedesi",
    color: "black",
  },

  {
    model: "bmw",
    color: "red",
  },

  {
    model: "mazda",
    color: "blue",
  },

  {
    model: "mersedesi",
    color: "black",
  },

  {
    model: "bmw",
    color: "red",
  },
];

console.log(cars[2]);
cars.push({
  model: "opel",
  color: "brown",
});
cars.pop();

cars.unshift({
  model: "opel",
  color: "brown",
});
cars.shift();

console.log(cars);
console.log(cars.slice(0, 2));

let mersedesi = cars.filter((obj) => obj.model === "mersedesi");
console.log(mersedesi);

let bmw = cars.find((obj) => obj.model === "bmw");
console.log(bmw);

cars.forEach((obj) => console.log(obj.model));

cars.map((obj) => console.log(obj.model));
