const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/NomeDatabase", {
    useNewUrlParser: true,
    useFindAndModify: false, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;