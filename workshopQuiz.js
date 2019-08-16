let express = require('Express');
let app = express();

app.get('/math/:operation/:no1/:no2',function(req,res){
    let operation = req.params.operation
    let n1=parseInt(req.params.no1)
    let n2=parseInt(req.params.no2)

    if (operation=="add"){
        let result= n1+n2;
        res.send("The output is ="+result);
    }
    else if (operation=="sub"){
        let result= n1-n2;
        res.send("The output is ="+result);
    }
    else{
        res.send("Unknown operation");

    }
    
})

app.listen(8080);
