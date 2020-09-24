express = require('express');
// MongoDB = require('mongodb').MongoClient;
// const MongoClient = new MongoClient("");
app = express();
// mongo = 

//Main Middleware
app.use(express.static('pages/enter'));
app.use(express.static('pages/scripts'));
app.use(express.static('pages'));
//Main Getf
app.get('/', (req, res) => 
{
    // res.sendFile(__dirname + '/pages/basic.css');
    // res.send('dsfs');
    // res.write(__dirname);
    // expree
    // res.sendFile(__dirname + '/pages/enter/index.html');
    // res.end();
});
app.post('/', (req, res) => 
{
    res.send(req.url);
});


app.listen(3000);