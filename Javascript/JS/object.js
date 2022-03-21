let person={};
console.log(person);

// tow ways to access the object

let student={

	first_name: 'rahul',
	last_name: 'sahu'
};
console.log(student.first_name);

// how to modify the object
student.first_name="krishna";
console.log(student.first_name);


// add some property
student.age=25;
console.log(student);

// delete the property
//delete student.age;
//console.log(student);



// check property exist or not.
console.log('age' in student);


// to check all the property

for(let ele in student)
{
	console.log(ele+": "+student[ele]);  // dot notation not work.
}


































