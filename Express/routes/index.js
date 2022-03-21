const router=require('express').Router();
const API=require('../middleware/apiKey.js')

router.get('/',(req,res)=>
{
    res.render('index.ejs',{title:'this is dynamic homepage'})
})

router.get('/about',(req,res)=>
{
    res.render('about.ejs',{title:'this is dynamic aboutpage'})
})
router.get('/download',(req,res)=>
{
    res.download(path.join(__dirname,'public','about.html'))
})

router.get('/product/api',API,(req,res)=>
{
   res.json([{"name":"krishna"},{"last_Name":"Sahu"}])
})






module.exports=router;
