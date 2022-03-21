// differ between var, let, const


//1- var poluted the code

// var age=18;
// if(age>=18)
// {
//     var b=10;

// }
// console.log(b);  // it's print 10

//........................................................................
// var age=18;
// if(age>=18)
// {
//    let b=10;

// }
// console.log(b);  // not accessable. beause it's block level.

//2.......................................................................
// var product=10;
// var product='krishna';
// console.log(product); // it oerride method

//using let we can't override.

//3................................................................
// var product='laptop';
// console.log(product);
//it attached windows object and it is not good pratice.
// remove the problems using let.


//.................................................
//4 differ between const and let.
// let product='laptop';
// product='tablet';
// console.log(product);  // reassign the value
//but in const we can't do this this
// basically this type create many bugs that wwhy we should
// use const

//..............................................
// console.log(age);  // undefine
// var age=15;

// console.log(age); //can't  use in let
// let age=15;  // 

//5...........................................
// const age={
//     year:18
// }
// age.year=20;
// console.log(age);  // but it can change object property




