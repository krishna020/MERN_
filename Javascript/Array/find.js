const a=[{name:'krishna', price:200},{name:'krish', price:2000},{name:'rahul', price:100}
,{name:'sam', price:300},{name:'shyam', price:200}]

// const b=a.map((item)=>
// {
// 	return(item.price)
// })

// document.write(b.join(" "))

const b=a.find((item)=>
{ 
	return(item.price===2000)
	
})

console.log(b)