console.log ('May Node be with you')
const express = require('express');
const app = express();
app.listen(3000,function(){
    console.log('listening on 3000')
})
app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index2.html')
});
