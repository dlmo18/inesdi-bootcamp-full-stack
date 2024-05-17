const express = require('express');

// Constants
const hostname = 'localhost';
const port = 8080;

console.log(`Inicio base datos`);

const db = require ('./database');

/*
Servicios
*/
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())
const userController = require('./controllers/user'); //controlador de acciones

const app = express();
app.use(express.json());
const router = express.Router();

// Validar online
app.get('/', (req, res) => {
  res.json({"message": "Servidor responde"});
});

// // Listar todos
app.get('/users', userController.getUsers);

// // Crear usuario
app.post('/users', userController.createUser);

// // Lista uno por ID
app.get('/users/:id', userController.getUserById);

// // Actualizar usuario por ID
app.put('/users/:id', userController.updateUser);

// // Borrar registro por ID
app.delete('/users/:id', userController.deleteUser);

// // Buscar por condición
app.post('/users/search', userController.findUsersByCondition);

console.log("Rutas configuradas");    
    

app.listen(port, hostname);
console.log(`Corriendo en http://${hostname}:${port}`);
