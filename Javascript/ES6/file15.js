// function Person(name)
// {
//     this.name=name;  // constructure function
// }

// const per=new Person('krishna') // before
// const per1=new Person('rahul')
// per1.name='sam';

//................................................

class Person
{
     name;
    constructor(name) 
    {
        this.name=name;
    }
    greet()
    {
        console.log(".......VD")
    }
}
const per=new Person('krishna');
per.name='sam'
console.log(per);
console.log(per.greet())
