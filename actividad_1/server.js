const express = require('express');

const bodyParser = require('body-parser');

// Constants
const hostname = 'localhost';
const port = 8082;

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/*
Servicios
*/

const userController = require('./controllers/user'); //controlador de acciones
const router = express.Router();


// Validar online
router.get('/', (req, res) => {
  res.json({"message": "Hello Crud Node Express"});
});

// Crear usuario
router.post('/users', userController.createUser);

// Listar todos
router.get('/users', userController.getUsers);

// Lista uno por ID
router.get('/users/:id', userController.getUserById);

// Actualizar usuario por ID
router.put('/users/:id', userController.updateUser);

// Delete a user
router.delete('/users/:id', userController.deleteUser);

// Find users by condition
router.post('/users/:filter/:value', userController.findUsersByCondition);

//app.use(bodyParser.json()); // for parsing application/json
console.log("Rutas configuradas");    


// Connect to mongodb server
const mongoose = require('mongoose');

const dbName = 'mock_database';
const dbHost = 'mongodb://localhost:27017/'+dbName;


mongoose.Promise = global.Promise;
mongoose.connect(dbHost).then(() => {
    console.log("Base de datos conectada!!");    

    app.listen(port, hostname);
    console.log(`Corriendo en http://${hostname}:${port}`);

}).catch(err => {
    console.log('No se puede conectar a la base de datos', err);
    process.exit();
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function() {
  console.log("Conectado a MongoDB : ".dbName);
});