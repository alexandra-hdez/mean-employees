const mongoose = require('mongoose')

mongoose
.set("strictQuery", false)
.connect('mongodb://127.0.0.1/mean-emloyees')
    .then(db => console.log('Db is connect'))
    .catch(err => console.log(err));