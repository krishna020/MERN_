const API=function(req,res,next)
{
    api_key='12345678'  
    if(req.query.api_KEY===api_key)
    {
        res.json({"message":"this key is mathched"})
        next()
    }
    
    else{
        res.json({"message":"this key is not mathched"})
    }
    

}

module.exports=API;
