let person={
	first_name:"krishna",
	last_name:'sahu',
	 age:25,
	 say_something :function()
	 {
	 	console.log("krishna");

	 },
	  say1()
	 {
	 	console.log("this introduce in ES6");
	 }
};
console.log(person);

// there are 3 type to add method
//1--
person.sayhellow=function()
{
	console.log("hellow");
}
person.sayhellow();

//2
function greet()
{
	console.log("hey..!")
}
person.say=greet;
person.say();
person.say_something();
person.say1();




