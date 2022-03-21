

function register(callback)
{
    setTimeout(()=>{
        console.log('register the data'); // callback is a higher order
        callback();                                 //function,
    },3000)
}
 
 function sendEmail(callback)
 {
    setTimeout(()=>{
        console.log('send the Emaildata');
        callback();
    },3000)
 }

 function login()
 {
    setTimeout(()=>{
        console.log('loginthe Emaildata');
        callback();
 },1000)
 
 function getUserData(callback)
 {
    setTimeout(()=>{
        console.log('get the data'); 
        callback();  
    },300)
 }
 
 function displayUserData(callback)
 {
    setTimeout(()=>{
        console.log('display the data');
        callback();
    },3000)
 }
 
// callback hell, nesting callback.

 register( function()
 {
    sendEmail(function()
    {
        login(function()
        {getUserData( function()
            {
                displayUserData();
            });
            

        });
        
    });
   

 })
 {
   console.log('register successfully');
 }
}

