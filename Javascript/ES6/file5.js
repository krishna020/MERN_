// enhance object literals


const lastName='key'
const object={

    name:'krish',
    //sirname:'sahu',
    [lastName]:'sahu', // alternate
}
console.log(object);


//.........................................................

// const product=
// {
//     buy:function()
//     {
//         console.log('buy this car')
//     },
// }
//product.buy();

// can also, method definition shorthand

// const product=
// {
//     buy()
//     {
//         console.log('buy this car...')
//     },
// }
// product.buy();

//...............................................................

// const accessToken='asdfghjk'
// const refressToken='zxcvbnm'

// const object={
//     accessToken,
//     refressToken,
//     //accessToken:accessToken, if both name is same.
//     //refressToken:refressToken,
// }

// console.log(object);
