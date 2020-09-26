express = require('express');
MongoDB = require('mongodb').MongoClient;
const MongoClient = new MongoDB("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });
app = express();
// mongo = 

//Main Middleware
app.use('/', express.static('pages/enter'));
app.use(express.static('pages/scripts'));
app.use(express.static('pages'));
//Main Getf
app.get('/', (req, res) => 
{
    express.static('pages/enter');
});

app.post('/', (req, res) => 
{
    MongoClient.connect((err, client) => 
    {
        if(err)
            return console.log(err);
        const db = client.db('goodMusic');
        const collection = db.collection('albums');
        collection.find().toArray((err, result) => 
        {
            console.log('find');
            if(err)
                return console.log(err);
            res.send(result);
            client.close();  
        });
    });
});


app.listen(3000);