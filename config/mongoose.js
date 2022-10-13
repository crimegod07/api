
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deepakdb:deepakdb@atlascluster.okcc0yz.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;
