const express = require('express');
const path = require('path');
 
const app = express();
 
 
app.use('/public', express.static('public'));
 
const router = express.Router();

router.get('/home', function (req, res) {
 
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
});
