# 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.
* Prisma ORM
* PostgreSQL
* NodeJS
* Express
* TypeScript
* Zod
* Insomnia
* Tsyringe
* bcrypt + JWT 

# 2. Arquitetura
  - Database;
  - Prisma + Migrations;
  - Controller + Services;
  - ZodSchemas;
  - Routes;
  - Middlewares + errors;
 
# Vagas e Candidaturas API

## Rotas de Usuário

### Registro de usuário POST /users

Padrão de corpo

```json
{
	"name": "Name",
	"email": "name@email.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 1,
   "name": "Name",
	"email": "name@email.com"
}
```

### Login POST /users/login

Padrão de corpo

```json
{
	"email": "name@email.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "accessToken": "TokenJWT",
   "user": {
      "id": 1,
      "name": "Name",
      "email": "name@email.com"
   }
}
```

Possiveis erros

401 UNAUTHORIZED

```json
{
   "message": "Email and password doesn't match"
}
```

404 NOT FOUND

```json
{
   "message": "User not registered"
}
```

### Retornar usuário GET /users

É necessário autorização para acessar esta rota, forneça o token do cabeçalho da requisição.

```json
{
   "headers": {
      "Authorization": "Bearerr eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEzNDUwNzA3fQ.SLI-Qj2WiUACrAZcDmxy55wcuwqAjlGAbiWk1J7jTLQ"
   }
}
```

Padrão de resposta (STATUS 200)

```json
{
	"id": 1,
   "name": "Name",
	"email": "name@email.com"
}
```

### POST /opportunities (Esta rota precisa de autorização)

Padrão de corpo

```json
{
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```
### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/user  (Esta rota precisa de autorização)


Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/:id  (Esta rota precisa de autorização)


Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```

### PATCH /opportunities/:id (Esta rota precisa de autorização)

Padrão de corpo

```json
{
   "title?": "Lorem ipsum",
   "description?": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

### DELETE /opportunities/:id (Esta rota precisa de autorização)

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```


### POST /opportunities/:id/applications 

Padrão de corpo

```json
{
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com",
   "opportunityId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### GET /opportunities/:id/applications (Esta rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@email.com",
      "linkedin": "https://example.com",
      "opportunityId": 1
   }
]
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```
