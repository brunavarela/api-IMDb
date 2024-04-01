# API de Filmes

A API de Filmes permite aos usuários avaliar filmes, visualizar informações como título, diretor, elenco, resumo e gênero, e ao administrador gerenciar usuários e filmes.

## Autenticação

A autenticação é necessária para acessar os endpoints da API. Um token JWT deve ser incluído no cabeçalho da solicitação para autenticar o usuário. Apenas usuários administradores têm permissão para realizar certas operações.

## Endpoints

- `DELETE /users/user_id`: Deleta um usuário existente.
- `DELETE /movies/movie_id`: Deleta um filme existente.
- `PATCH /movies/movie_id/rating`: Atualiza a avaliação de um filme existente.
- `PATCH /users/user_id`: Atualiza as informações de um usuário existente.
- `PATCH /movies/movie_id`: Atualiza as informações de um filme existente.
- `GET /users`: Lista todos os usuários cadastrados.
- `GET /movies`: Lista todos os filmes cadastrados.
- `POST /movies`: Cria um novo filme.
- `POST /users/login`: Realiza o login de um usuário.
- `POST /users`: Cria um novo usuário.

## Respostas de Sucesso

- **Usuário deletado com sucesso (status 200)**
- **Filme excluído com sucesso (status 200)**
- **Nota do filme atualizada com sucesso (status 200)**
- **Usuário atualizado com sucesso (status 200)**
- **Filme atualizado com sucesso (status 200)**

## Exemplos de Resposta

#### Lista de Usuários:
```json
[
  {
    "user_id": "01ce756e-581f-4fa0-a581-e2c86eb4ba8c",
    "name": "Vanessa",
    "email": "vanessaaquino@email.com",
    "isAdmin": 0
  },
  {
    "user_id": "453675f0-9a43-4d9e-8325-148a8c8b0054",
    "name": "Bruna",
    "email": "bruna@email.com",
    "isAdmin": 1
  }
]
````
#### Lista de Filmes:
```json
[
  {
    "movie_id": "0115d247-2ea1-42aa-9e90-48b7f373a9f7",
    "title": "Harry Potter e o Cálice de fogo",
    "director": "David Yates",
    "cast": "Daniel Hadcliff, Emma Watson, Rupert Grint",
    "genre": "aventura",
    "resume": "Quarto ano de aventuras do bruxinho",
    "image": "https://m.media-amazon.com/images/S/pv-target-images/1a850591f8ae46c85cf63a4acb258cf2e0a7ab5b53c997475e856d70b40e9ac8.jpg",
    "rating": 10,
    "created_at": "2024-03-31T21:09:23.000Z",
    "updated_at": "2024-03-31T21:09:23.000Z"
  },
  {
    "movie_id": "07ef58ce-b1ec-4845-99c2-7b472c073942",
    "title": "Harry Potter e a Camara Secreta",
    "director": "David Yates",
    "cast": "Daniel Hadcliff, Emma Watson, Rupert Grint",
    "genre": "aventura",
    "resume": "Segundo ano de aventuras do bruxinho",
    "image": "https://m.media-amazon.com/images/S/pv-target-images/f76698c07b820c62d5a3372d2c7b93d068d15154d713bccc71068b5864e7f832.jpg",
    "rating": 8,
    "created_at": "2024-03-31T21:06:35.000Z",
    "updated_at": "2024-03-31T21:06:35.000Z"
  }
]

````
#### Criação de Filmes: 
```json
{
  "mensagem": "Filme inserido com sucesso",
  "id_movie": "8d2eb088-1fda-4bae-97cf-990b0da67f88"
}

#### Login:
```json
{
  "status": 200,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbmVzc2FhcXVpbm9AZW1haWwuY29tIiwiaXNBZG1pbiI6MCwiaWF0IjoxNzExOTEzMDUzLCJleHAiOjE3MTE5OTk0NTMsInN1YiI6IjAxY2U3NTZlLTU4MWYtNGZhMC1hNTgxLWUyYzg2ZWI0YmE4YyJ9.A3NNrkGfYCZT3zYuy-mHZp2NqhJAaemnyce-W5DjTH0"
}
```
#### Criação de usuário:
```json
{
  "id": "453675f0-9a43-4d9e-8325-148a8c8b0054",
  "name": "Bruna",
  "email": "bruna@email.com",
  "isAdmin": true
}
```

#### Iniciando o projeto

Para rodar o projeto, no front e back, basta você ir para o diretório api para o back e frontend para o front e rodar os seguintes comandos no terminal:

npm install
npm run dev

## Versões

- **Nome**: api-imdb
- **Versão**: 1.0.0
- **Descrição**: Teste técnico de Restful API
- **Autor**: Bruna Varela Borges
- **Licença**: ISC

