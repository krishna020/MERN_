
// when we want to create blueprint of object.
// let Student=
// {
// 	name:"krishna",
// 	last:"sahu",
// 	age:17,
// 	class=11
// };

function Student( n,l,a,c) // add g
{
   this.name=n;
   this.last=l;
   this.age=a;
   this.class=c;
   // this.gender
   // this.name=function()
   // {
   // 	return            // we can also add here.
   // }
}

var obj1=new Student("krishna","sahu",25,11);
console.log(obj1);

var obj2=new Student("rahul","gupta",25,11);
obj2.gender="male";  // add property
// add method
obj2.show=function()
{
	return(name+" "+last);
}
console.log(obj2);
