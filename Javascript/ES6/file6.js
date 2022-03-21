//destructruing
const object={
    name:'krishna',
    lst:'sahu',
    roll:23,
    sr:1,
    br:3,
};

console.log(object.name);
console.log(object.lst);
console.log(object.roll);
console.log(object.sr);

const {name,lst,roll} = object;
console.log(name+" "+roll);
we can modify the property

const {name:fullName,lst,roll} = object;
console.log(fullName+" "+roll);



