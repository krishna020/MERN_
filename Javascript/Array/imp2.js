// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// These two different statements both create a new empty array named points:
// const points = new Array();
// const points = [];
//.................................................................
// const arr=new Array(20);
// console.log(arr);

// don't create new Array() with 1 element.it's length show error.

//.............................................................................

// to check given thing is array or not.
//Array.isArray(name_of_array)

//const a=[1,2,3,4];
//console.log(typeof a)
//The typeof operator, when used on an array, returns object:
// const a=[1,2,3,4];
// console.log(Array.isArray(a))  --true

// const a=[1,2,3,4];
// console.log(a instanceof Array);  --true 

//.........................................................................
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())
// //convert array to string

//...................................................................
//  
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
//same push method.

//....................................................................

// The shift() method removes the first element of an array
//  (and "shifts" the other elements to the left):

// const a =[1,2,3,4,5,6,7,8]
// console.log(a.shift())
// console.log(a)
//..........................................................
// The unshift() method adds a new element to an array (at the beginning), 
// and "unshifts" older elements:
// const a =[1,2,3,4,5,6,7,8]
// console.log(a.unshift())
// console.log(a)

//................................................................
// Warning !
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.






