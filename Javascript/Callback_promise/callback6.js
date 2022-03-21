// using await



function register()    // promise();
{
     return new Promise((resolve,reject)=>
     {
        setTimeout(()=>{
            console.log('register the Emaildata');
            resolve();
        },3000)
     });
     
   
}
 
function sendEmail()    // promise();
{
     return new Promise((resolve,reject)=>
     {
        setTimeout(()=>{
            console.log('send the Emaildata');
            resolve();
            // return reject("this is reject"); 
        },3000)
     });
    }


 function logIn()    // promise();
{
     return new Promise((resolve,reject)=>
     {
        setTimeout(()=>{
            console.log('login the Emaildata');
            resolve();
        },3000)
     });
    }
 
 function getUserData()    // promise();
 {
      return new Promise((resolve,reject)=>
      {
         setTimeout(()=>{
             console.log('get the userdata');
             resolve();
         },3000)
      });
    }


 
      function display()    // promise();
      {
           return new Promise((resolve,reject)=>
           {
              setTimeout(()=>{
                  console.log('send the Emaildata');
                  resolve();
              },3000)
           });
        }
      
// register()
//  .then(sendEmail)
//  .then(logIn)
//  .then(getUserData)
//  .then(display)
// //  .catch((err)=>{
// //      console.log('error'+err);
// //  }


try{
 async function authentication()
 {
    await register();
    await sendEmail();
    await logIn();
    await getUserData();
    await display();
 }
}

catch(err)
 {
   console.log(err);   // we can also use.
   throw new Error();
 };
 //use then or await.both part of promise

authentication().then(()=>  
 {
console.log('all set');
});







 //..........................................................
// //authentication();
// authentication().then(()=>  //use then or await.both part of promise
// {
//   console.log('all set');
// });
// // .catch((err)=>
// // {
// //     console.log(err)   // we can also use.
// // });
