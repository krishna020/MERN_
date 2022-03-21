// map (Hashmap)

const mapp=new Map();
mapp.set('name','krishna')
mapp.set('name1','rahul')
mapp.set('name2','abhinav')// fast insertion
mapp.set('last','sahu')

console.log(mapp);
console.log(mapp.get('name'))  //o(1) very fast for lookup, preserved.
console.log(mapp.size);


const obj={
    name:'krishna',  // order not preserved
    last:'sahu'        // not easy for find size
}

console.log(obj.name)

