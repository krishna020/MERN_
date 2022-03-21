

//some check the array element then return true, false.


const a=[{name:'krishna', price:200},{name:'krish', price:2000},{name:'rahul', price:100}
,{name:'sam', price:300},{name:'shyam', price:200}]

const b= a.some((n)=>
{
    return(n.price>200)
})
console.log(b)


