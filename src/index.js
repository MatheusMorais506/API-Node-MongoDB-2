const express = require('express');
//const bodyParser = require('body-parser'); //defasado

const app = express();
// const app = express(); para iniciar a api
app.use(express.json()); //para entender json
app.use(express.urlencoded({extended: false}));
//urlencoded para ele entender parametros via url
//app.listen = porta que eu quero ouvir

require('./app/controllers/index')(app);

console.log('api ok')

app.listen(3000)

