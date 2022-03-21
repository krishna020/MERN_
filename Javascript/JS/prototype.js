function Student( n,l,a,c) // add g
{
   this.name=n;
   this.last=l;
   this.age=a;
   this.class=c;
}
// suppose we want to add propert to student so
Student.prototype.roll=12;

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
