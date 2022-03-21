class Person{
    name;
    constructor(name)
    {
           this.name=name;
    }
    greet()
    {
        console.log("good morning")
    }
}

class greatPerson extends Person
{
  lastNmae;  
}



const object=new greatPerson();
console.log(object.greet())

