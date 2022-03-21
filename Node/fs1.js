const http=require('http');
const fs=require('fs');
const path=require('path')

// how to create a file.

// fs.mkdir(path.join(__dirname,'test1'),(err)=>
// {
//     if(err)
//     {
//       console.log(err)
//     }
//     else{
//       console.log('file created')
//     }
// });

//..................................................................................
// if file and content is already then it override the content.

// fs.writeFile(path.join(__dirname,'test','demo.txt'),'hello I am from write file',(err)=>
// {
//   if(err)
//   {
//     console.log('error occured'+err)
//   }
//   else{
//     console.log('file is created')
//   }
// })
// fs.appendFile(path.join(__dirname,'test','demo.txt'),' added file',(err)=>
// {
//   if(err)
//   {
//     console.log('error occured'+err)
//   }
//   else{
//     console.log('added')
//   }
// })
//...............................................................................

fs.readFile(path.join(__dirname,'test','demo.txt'),'utf-8',(err,data)=>
{
  if(err)
  {
    console.log('errror occured')
  }
  else{
    //console.log(data.toString())  // for no utf
    console.log(data)
  }
})