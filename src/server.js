//MODELS
var app = require('./controller/app.js');
var user = require('../src/model/users.js');

var cors = require('cors');
app.use(cors());
//SERVER INITIALISATION
var port = 8081;
var server = app.listen(port,function(){
    console.log("App hosted at localhost:"+port); 
});

//LOGIN ROUTE
app.post("/login/", (req, res) => {
    user.verify(req.body.username, req.body.password, (error, user) => {
        if (error) {
            res.status(500).send();
            return;
        }
        if (user === null) {
            res.status(401).send();
            return;
        }
        res.status(200).send(user);
    })
});
