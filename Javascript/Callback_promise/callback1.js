function waitForThreeSeconds()
{
    let ms=3000 + new Date().getTime();
    while(new Date()<ms) {}
}


function register()
 {
     waitForThreeSeconds();
     console.log('register the data');   //it's syncronous code.
 }
 function sendEmail()
 {
    waitForThreeSeconds();
    console.log('send the mail');
 }
 function login()
 {
    console.log('login the data');

 }
 function getUserData()
 {
    waitForThreeSeconds();
    console.log('getuser the data');

 }
 function displayUserData()
 {
    waitForThreeSeconds();
    console.log('display the user data');

 }
 register();
 sendEmail();
 login();
 getUserData();
 displayUserData();
 