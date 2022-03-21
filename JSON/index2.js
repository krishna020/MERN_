
const fs=require('fs')
const object={
    name:'krishna',
    lastName:'sahu',
    Address:'Allahabad'
};

const jsonFile=JSON.stringify(object)
//console.log(jsonFile)
// fs.writeFile('file1.json',jsonFile,(err)=>
// {
//    console.log('done')
// })
fs.readFile('file1.json','UTF-8',(err,data)=>
{
    console.log(data)
})