express = require('express');
app = express();

//Main Middleware
// app.use();
//Main Get
app.get('/', (req, res) => 
{
    express.static(__dirname + '/pages');
});

app.listen(8080);