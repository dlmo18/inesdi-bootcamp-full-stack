const express = require('express');

const bodyParser = require('body-parser');

// Connect to mongodb server
const mongoose = require('mongoose');

const dbName = 'mock_database';
const collectionName = 'users';
const dbHost = 'mongodb://localhost:27017/'+dbName;


mongoose.Promise = global.Promise;
mongoose.connect(dbHost, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB database");
});

// Constants
const hostname = 'localhost';
const port = 8082;

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/*
Your implementation here 
*/

const userController = require('./controllers/user'); //controlador de acciones
const router = express.Router();


// Validar online
router.get('/', (req, res) => {
  res.json({"message": "Hello Crud Node Express"});
});

// Create a new user
router.post('/users', userController.createUser);

// Retrieve all users
router.get('/users', userController.getUsers);

// Retrieve a single user
router.get('/users/:id', userController.getUserById);

// Update a user
router.put('/users/:id', userController.updateUser);

// Delete a user
router.delete('/users/:id', userController.deleteUser);

// Find users by condition
router.post('/users/search', userController.findUsersByCondition);

//app.use(bodyParser.json()); // for parsing application/json
console.log("Rutas configuradas");    

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);

