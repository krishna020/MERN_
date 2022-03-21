//spread...
// it is use for copy the array

// 
// const arr=['1','2','3'];
//const copy=[...arr1] 
// const copy=[...arr1,'array'] 


//.................................................
// how to copy object.
// const obj={
//     name:'krishna',
//     last:'sahu'
// }

// const newo=obj;// address of both element is same.
// newo.last='gupta'
// console.log(obj);

// const obj={
//     name:'krishna',
//     last:'sahu'
// }

const obj={
         name:'krishna',
         last:'sahu'}

const newo={...obj,roll:20}
newo.last='gupta'
console.log(obj.last);
console.log(newo.last);



