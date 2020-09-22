express = require('express');
MongoDB = require('mongodb').MongoClient;
app = express();
// mongo = 

//Main Middleware
// app.use();
//Main Get
// app.get(express.static('pages'));
app.get('/', (req, res) => 
{
    // res.sendFile(__dirname + '/pages/basic.css');
    // res.send('dsfs');
    // res.write(__dirname);
    // expree
    res.sendFile(__dirname + '/pages/index.html');
});
app.post('/', (req, res) => 
{
    res.send(req.url);
});


app.listen(8080);