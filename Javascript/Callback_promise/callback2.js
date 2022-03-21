

function register()
{
    setTimeout(()=>{
        console.log('register the data');
    },3000)
}
 
 function sendEmail()
 {
    setTimeout(()=>{
        console.log('send the Emaildata');
    },3000)
 }

 function login()
 {
     console.log('login the user');
 }
 
 function getUserData()
 {
    setTimeout(()=>{
        console.log('get the data');   // there is one problems in this code
                                        // this is not in order form.
    },3000)
 }
 
 function displayUserData()
 {
    setTimeout(()=>{
        console.log('display the data');
    },3000)
 }
 
 register();
 sendEmail();
 login();
 getUserData();
 displayUserData();
 