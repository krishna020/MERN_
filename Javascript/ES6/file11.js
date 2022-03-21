//promise
function login(callback)
{
    setTimeout(()=>
    {

        console.log('login')
        callback();
    },0)
}

login(()=>);
console.log('redirect');
