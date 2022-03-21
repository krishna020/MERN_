const apiKey = require('../middleware/apiKey')

const router=require('express').Router()
const apiKeymiddle=require('../middleware/apiKey')

// use local level on all router

router.use(apiKeymiddle);

router.get('/',(req,res)=>
{
       res.render('index.ejs',{title:'krishna'})
 })
 router.get('/about',(req,res)=>
 {
        res.render('about.ejs',{title:'about'})
    
  })
  router.get('/api/products',(req,res)=>
  {
      res.json([{name:'krishna'}])  
  })

 router.get('/download',(req,res)=>
 {
        res.render('index.ejs')      
  })

  module.exports=router;
