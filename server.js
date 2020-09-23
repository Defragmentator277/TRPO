express = require('express');
MongoDB = require('mongodb').MongoClient;
app = express();
// mongo = 

//Enter Middleware
// app.use('/enter', (req, res) => 
// {
//     // res.sendFile(__dirname + '/pages/enter/index.html');
//     // express.static('pages/enter');
//     // express.static('pages');
//     // express.static('pages/scripts');
// });

app.use('/enter', express.static('pages/enter'));
//Main Get
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


app.listen(8080);