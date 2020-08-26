const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log("for",basket[i]);
}

//2
basket.forEach(item => {
  console.log("forEach",item);
})

for (item in detailedBasket) {
  console.log("for in",item);
}

for (item of basket) {
  console.log("for of",item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

// forEach solution:
const biggestNumberInArray = arr =>{
  let max = arr[0];
  if(arr.length === 0){
    max = 0;
  }
  arr.forEach(item=>{
    if(typeof item === "string"){
        max = 0;
    }
      if(max < item ){
        max = item
      }
  });
  return max;
}

// for solution
const biggestNumberInArray2 = arr =>{
  let max = arr[0];
  if(arr.length === 0){
    max = 0;
  }
  for(let i = 0;i < arr.length;i++ ){
    if(typeof arr[i] === "string"){
      max = 0;
    }
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}

// for of solution
const biggestNumberInArray3 = arr =>{
  let max = arr[0];
  if(arr.length === 0){
    max = 0;
  }
  for(item of arr){
    if(typeof item === "string"){
      max = 0;
  }
    if(max < item ){
      max = item
    }
  }
  return max;
}

max = biggestNumberInArray(array);
console.log(max);


max = biggestNumberInArray2(array2);
console.log(max);


max = biggestNumberInArray2(array3);
console.log(max);


max = biggestNumberInArray3(array);
console.log(max);


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

const checkBasket = (basket, lookingFor) =>{
  for(item in basket){
     if(item === lookingFor){
      return `${item}, is in your basket`;
     }
  }
  return `i can't find ${lookingFor} in your basket!`;
}

let check = checkBasket(amazonBasket,"disc");
console.log(check);