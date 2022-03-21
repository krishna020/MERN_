let book=["Math","java","science","javascripts"];


//add element in last position.

book.push("krishna");
console.log(book);


// add element in first position
book.unshift("krishna");
console.log(book);

// delete element from the last position.
book.pop("krishna");
console.log(book);

// how to find length
console.log(book.length);

//how to delete element from first
book.shift();
console.log(book);

// add and delete element from middle.
book.splice(1,2); // index, number of element for remove.
console.log(book);

// how to delete the array
// book=[];
// console.log(book);
// book.length=0;
// console.log(book);

// how to find position
let position=book.indexOf("Math");
console.log(position);

// convert sentence into array
let st="this is a random sentence";
let arr=st.split(' ');
console.log(arr);

// convert arrays to sentence
let join=book.join(' ');
console.log(join);

//add two string
let nb=book.concat(st);
console.log(nb);

// more than two
//let lt=book.concat(a1,a2,a3);

// multiple arrays
let mul=[["math",200],["java",700],["bio",140]];
console.log(mul[1][0]);


///loop

let loop=[1,2,3,4,5,6,7,8];
let len=loop.length;
for(let i=0;i<len;i++)
{
	console.log("element is "+loop[i]);
}

//for each
loop.forEach(fun1);  // there are two method for iterate

function fun1(value)
{
	console.log(value);
}




