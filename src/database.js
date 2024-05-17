
// Connect to mongodb server
const mongoose = require('mongoose');
//const dbHost = 'mongodb://mongo/'+dbName;
const dbHost = "mongodb+srv://dlmo18:rWfi3mjrj2EgqGbe@cluster0.jczvk7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'mock-database';

mongoose.Promise = global.Promise;
mongoose.connect(dbHost).then(() => {
    console.log("Base de datos iniciada "+dbHost+" !!");

}).catch(err => {
    console.log('No se puede conectar a la base de datos: '+dbHost, err);
    process.exit();
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('connected', function() {
  console.log("Conectado a MongoDB : ".dbName);
});

module.exports = db;