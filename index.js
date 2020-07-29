var app = require("express")(); 
var bodyParser = require("body-parser"); 
app.use(bodyParser()); 
var employees=[ 
    {"id":"1","ename":"Kiran","job":"Trainer","salary":"5500"}, 
    {"id":"2","ename":"Dev","job":"Programmer","salary":"5800"}, 
    {"id":"3","ename":"Mock","job":"Developer","salary":"5900"} 
]; 
app.get('/',function(req,resp){ 
    resp.send(employees); 
}); 
app.post('/',function(req,resp){ 
    var e = req.body; 
    employees.push(JSON.stringify(e)); 
    resp.send('Row added successfully...'); 
}); 
app.listen(9000,()=>console.log("API started listening...")); 
