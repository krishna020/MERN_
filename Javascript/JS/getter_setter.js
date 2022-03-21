 let person=
{
	name:"rahul",
	age:25,

	// getname:function()
	// {
	// 	return this.name.toUpperCase();
	// }

	// get getname()
	// {
	// 	return this.name.toUpperCase();
	// }

	set setname(n)
	{
          this.name=n.toUpperCase();
	}
};
person.setname="krishna";

console.log(person);


