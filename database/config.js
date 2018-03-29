const mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
