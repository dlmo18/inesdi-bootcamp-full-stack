# Bootcamp del Master en Full Stack Web Development -  David Molina

## Descripción de contenidos

* Código de actividad para creación de API de servicios de NodeJS con MongoDB Dokerizado

# Instalar servicios:
```bash
npm i
```

# Levantar desde NodeJS:
```bash
npm run start
```
Open in browser http://localhost:8080/

# Levantar desde Docker:
```bash
docker build inesdi .
docker run -p 8000:8080 inesdi
```
Open in browser http://localhost:8000/

# Levantar desde Docker-compose:
```bash
docker-compose build
docker-compose up
```
Open in browser http://localhost:8081/


## Ejecutar consultas / Se incluye una colección en POSTMAN con ejemplos

# listar todos los registro
```bash
curl --location 'http://localhost:8080/users'
```

# buscar registro por filtro de GÉNERO (gender)
```bash
curl --location 'http://localhost:8080/users/search' \
--header 'Content-Type: application/json' \
--data '{
  "gender": "Male"
}'
```

# crear registro
```bash
curl --location 'http://localhost:8080/users' \
--header 'Content-Type: application/json' \
--data-raw '{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@dummy.com",
  "gender": "Male"
}'
```

# modificar registro por ID
```bash
curl --location --request PUT 'http://localhost:8080/users/6647c4c05a8c59ecfa84d5a9' \
--header 'Content-Type: application/json' \
--data-raw '{
  "first_name": "Johnny",
  "last_name": "Doemon",
  "email": "Johnny.Doemon@dummy.com",
  "gender": "Male"
}'
```

# eliminar registro
```bash
curl --location --request DELETE 'http://localhost:8080/users/6647c500cea30eb5979584d6' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "john.doe@dummy.com"
}
'
```
