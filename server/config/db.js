const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/Dream_Nest';

const mongoDB = mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connected successfully');
        const db = mongoose.connection.db;
        const fetch_data = db.collection();
        fetch_data.find({}).toArray(function (err, data) {
            if (err) console.log(err);
            else console.log(data);
        });
        
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoDB;
