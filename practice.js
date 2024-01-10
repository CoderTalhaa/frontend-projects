//!  Functions ( Arrow functions ) && ( Hight order functions )

//^  for of loop:

//* Arrays
// let sum = 0;
// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   sum += num;
// }
// console.log(sum);

//* Maps
// const map = new Map();
// map.set("LA", "10");
// map.set("FR", "50");
// map.set("AR", "90");

// for (const [key, value] of map) {
//   // console.log(key ,"  ", value)
// }

//^  for in loop:

//* Objects

// const myObject = {
//   name: "Talha",
//   age: 19,
// };

// for (const key in myObject) {
//   // console.log(key," ", myObject[key])
// }

//^  for Each loop:

// const getInfo = [
//   "talha",
//   "19",
//   'hiiii',
//   20,
//   'bitch'
// ];

// getInfo.forEach((item)=>{
//   //  console.log(item)
// })

//!       Map / Filter / Reduce / Sort

//^ Filter

// const arr = [1, 2, 3, 4, 5, 6, , 7];

// const newArr = arr.filter((num) => num > 4);

// console.log(newArr)

//^ Map

// const number = [2, 3, 4, 88, 9, 0, 2, 34, 5];

// const newNumber = number.map((list) => {
//   return list * 2;
// });
// console.log(newNumber)

//^ You can also do chaining of these methods

// const chainNumber = number
//   .map((num) => num / 2)
//   .map((num) => num * 3)
//   .filter((num) => num > 5)
//   .map((num) => num + 1);

// console.log(chainNumber);

//^ Reduce

// const shoppingCart = [
//   {
//     name:'Talha',
//     age : 19,
//   },
//   {
//     name:'Taha',
//     age : 30,
//   },
//   {
//     name:'ali',
//     age : 1,
//   }
// ]

// const totalAge = shoppingCart.reduce( (acc, item)=>{
//   return acc + item.age
// },0)

// console.log(totalAge)

//!  PROMISES / Asyn / Await

// function getBlood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const blood = "🩸";
//       resolve(blood);
//     }, 2000);
//   });
// }

// function getOragn(blood) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const organ = blood + "🫁";
//       resolve(organ);
//     }, 2000);
//   });
// }

// function getHeart(organ) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heart = organ + "🫀";
//       resolve(heart);
//     }, 2000);
//   });
// }

// async function system(){
//     const blood = await getBlood();
//     console.log("Here is blood ", blood);
//     const organ = await getOragn(blood);
//     console.log("Organ created ", organ);
//     const heart = await getHeart(organ);
//     console.log("Heart is ready to donate", heart)
// }

// system()

// const promise = new Promise((resolve,reject)=>{
//   let data = true
//   if(data){
//     resolve('Data received')
//   }else{
//     reject('No Data Received')
//   }
// })

// promise
// .then((data)=>{
//   console.log(data)
// })
// .catch((data)=>{
//   console.log(data)
// })
// .finally(()=>{
//   console.log('you cant stop me')
// })

// async function api(){
//   try {
//     const reponse = await fetch('https://dummyjson.com/quotes')
//     const data = await reponse.json()
//     for (const quote of data.quotes) {
//       console.log("Quote ID:", quote.id);
//       console.log("Quote Text:", quote.quote);
//       console.log("Quote Author:", quote.author);
//     }

//   } catch (error) {
//     console.log(error)
//   }

// }
// api()

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Name : ${this.name} , Email : ${this.email}`);
  }
}

class Admin extends User {
    constructor(){
        super();
    }
    editData(){
        
    }
}

let person = new User("talha", "talha123@");
let person1 = new User("talha", "talhasdda123@");
let person2 = new User("talhasd", "tsdalha123@");

person.viewData()
person1.viewData();
person2.viewData();
