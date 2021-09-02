var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;
 
// request handlers
app.get('/', (req, res) => {
    res.send('Parth your trial');
});
 
app.listen(port, () => {
    console.log('Server started on: ' + port);
});