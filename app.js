
/////////<<<<<<<<<<!!!!!!express.js!!!!!!!>>>>>>>>>>>//////////
//able to have multiple get

let express = require('express'); //third party package,built in with node.js !!!>>>>>>find node module to get express package

let app =express(); //instance of express application

app.get("/",function(req,res){
    res.send("Hello to my first Express app!!");
});


// app.get("/wiki/:para",function(req,res){   // para is just a name can change e.g.{ para: 'Mel' }

app.get("/wiki/:para/fit2095/:id",function(req,res){   //must match wiki/anything**/fit2095/id e.g. http://localhost:8080/wiki/Melbo/fit2095/23
    console.log(req.url);
    console.log(req.params);  //for path localhost:8080/wiki/melbourne
}); //any word after wiki is a parameter (except number)

app.get("/report",function(req,res){
    console.log(req.url);
    console.log(req.query); //for query localhost:8080/wiki/?name=Tim&age=24
    console.log("The name is ==",req.query.name);
    console.log("The age is ==",req.query.age);
    
});

// app.get("/about",function(req,res){   //each function do one task, no need to worried about other 
//     res.send("This is an about page");
// });

app.get('/about', function (req, res) { 
    res.send('about')
});

app.get('/random.text', function (req, res) {
    res.send('random.text')
  })

app.get("/contactUs",function(req,res){
    res.send("This is the Contact Us page");
})


app.post("/calc",function(req,res){

});//this will execute if a post request arrive   app.put / app.delete 

app.listen(8080);






//////////////////<<<<node.js>>>>/////////////////////////
// let http=require('http');

// http.createServer(function (req,res) {
//     if(req.methodd ==="GET"){
//         if (req.url==="/"){
//             //send back the home page
//         }
//         else if (req.url=="/about"){
//             //send the about page
//         }
//         //handle get request
//     }
//     else if (req.mrthod=="POST"){
//         //handle get post request
//     }

// }).listen(8080)