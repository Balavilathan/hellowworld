const express = require('express');
const app = express();
const port = process.port || 3000;
app.get('/',(req, res) => res.send('hello world'));
app.listen(port,() => 
{
    console.log('REST API running on port 3000');
}
)