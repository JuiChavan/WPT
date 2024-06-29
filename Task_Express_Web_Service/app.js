const express=require("express")

//creating express obj
const app=express()

const bodyParser=require("body-parser")
const routes=require('./router/routes')
//middleware-parses incomng req
app.use(bodyParser.urlencoded({extended:false}))
//parses incoming request bodies in various formats (urlencoded and JSON).
//parses the form data into a JavaScript object accessible as req.body

app.use(bodyParser.json())
// used when your application expects JSON data in the request body
//It parses the JSON data into a JavaScript object accessible as req.body.



//2 obj-- post-req get-query

// //cors settings
//  app.use(function(req,res,next){
//      res.setHeader('Access-Control-Allow-Origin','*')
//      res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
//      res.setHeader('Access-Control-Allow-Headers','Content-Type')
//      res.setHeader('Access-Control-Allow-Credentials',true)
//      next()
//  })

app.use('/',routes)

app.listen(3002,function(){
    console.log("started.......")
})

module.exports=app