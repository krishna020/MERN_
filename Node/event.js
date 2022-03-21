const Emitter=require('events')
// const newEmitter=new Emitter()

// newEmitter.on('someone',(data)=>
// {
//     console.log(data)
// })

// newEmitter.emit('someone',{name:'krishna'})

// on property is used to bind a function with the event and emit is used to fire an event.

class Auth extends Emitter
{

    register(user)
    {
       console.log("user is : " +user);
       auth.emit('register',user)
       
    } 
}

const auth=new Auth()
auth.on('register',(user)=>
{
    console.log("sending  the data : " +user)
    
})
auth.on('register',(user)=>
{
    console.log("sending  the welcome : " +user)
    
})


auth.register('krishna');



