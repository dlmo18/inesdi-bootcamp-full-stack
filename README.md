# Bootcamp del Master en Full Stack Web Development -  David Molina

## Descripción de contenidos

* actividad_1: código de actividad con las codificaciones solicitadas

# levantar BD
```bash
docker network create mynetwork
docker run --name mongodb-container --hostname mongodb-container -d -p 27017:27017 --network mynetwork mongo

docker run --name mongodb-container --hostname mongodb-container -d -p 27017:27017 --network mynetwork -v <YOUR-PATH-VOLUME-DIRECTORY>:/data/db mongo
```

# Levantar el servicio desde nodeJS:
```bash
cd actividad_1/
node server.js
```

# Levantar desde Docker:

```bash
cd actividad_1/
docker build -t test/dmolina .

docker run -p 8080:8080 -d --name test-dmolina --network mynetwork test/dmolina
```
## Ejecutar consultas / Se incluye una colección en POSTMAN con ejemplos

# listar todos los registro
```bash
curl --location 'http://localhost:8082/users'
```

# buscar registro por filtro
```bash
curl --location 'http://localhost:8082/users/gender/Female'
```

# crear registro
```bash
curl --location 'http://localhost:8082/users' \
--header 'Content-Type: application/json' \
--data-raw '{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@dummy.com",
  "gender": "Male"
}'
```

# modificar registro
```bash
curl --location --request PUT 'http://localhost:8082/users/666' \
--header 'Content-Type: application/json' \
--data-raw '{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@dummy.com",
  "gender": "Male"
}'
```

# eliminar registro
```bash
curl --location --request DELETE 'http://localhost:8082/users/666' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "john.doe@dummy.com"
}
'
```
