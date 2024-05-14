# Bootcamp del Master en Full Stack Web Development -  David Molina

## Descripción de contenidos

* actividad_1: código de actividad con las codificaciones solicitadas

# Levantar desde Docker:
```bash
cd actividad_1/
docker-compose up
```

## Ejecutar consultas / Se incluye una colección en POSTMAN con ejemplos

# listar todos los registro
```bash
curl --location 'http://localhost:8080/users'
```

# buscar registro por filtro
```bash
curl --location 'http://localhost:8080/users/'
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

# modificar registro
```bash
curl --location --request PUT 'http://localhost:8080/users/666' \
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
curl --location --request DELETE 'http://localhost:8080/users/666' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "john.doe@dummy.com"
}
'
```
