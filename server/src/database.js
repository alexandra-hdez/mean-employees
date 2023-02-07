const mongoose = require('mongoose')

mongoose
.connect('mongodb://localhost/mean-employees', {
    useUnifiedTopoly: true,
    userNewParser: true,
    useFindAndModify: false
})
    .then(db => console.log('Db is connect'))
    .catch(err => console.log(err));