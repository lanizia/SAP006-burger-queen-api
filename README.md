# Burger Queen - API com Node.js

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto))
* [2. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [3. Ferramentas utilizadas](#4-ferramentas-utilizadas)
* [4. Endpoints](#5-endpoints)
* [5. Desenvolvedora](#6-desenvolvedora)

## 1. Resumo do projeto

![Node.js logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg)

O desafio desse projeto foi criar uma aplicação back-end para manejar
os dados de um pequeno restaurante de hamburgueres, que está crescendo e
necessita de um sistema para realizar pedidos usando um _tablet_, que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.
A interface front-end da aplicação Burger Queen já foi criada e pode ser acessada [AQUI](https://niqsburger.netlify.app)

## 2. Objetivos de aprendizagem

Como API, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _lidar_ com as requisições que chegam e devolver respostas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde.

O [Node.js](https://nodejs.org/) nos permite criar servidores web super eficientes
de maneira relativamente simples, tudo isso usando JavaScript!

Neste projeto partimos de um _boilerplate_ que já contém uma série de
_endpoints_ (pontos de conexão ou URLs) e nos pedem para completar a aplicação.
Isto implica que teremos que começar a ler a implementação existente, e
familiarizar-nos com a _stack_ escolhida ([Node.js](https://nodejs.org/),
[Express](https://expressjs.com/)), [Sequelize](https://sequelize.org),
e [PostgreSQL](https://www.postgresql.org/).

O cliente nos deu um [link para a documentação](https://lab-api-bq.herokuapp.com/api-docs/)
que especifica o comportamento esperado da API que iremos expor por
HTTP. Lá podemos encontrar todos os detalhes que os _endpoints_ deve
implementar na aplicação, que parâmetros esperam, o que devem responder, etc.

O objetivo de aprendizagem principal é adquirir experiência com o **Node.js**
como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série
de outras ferramentas comumente utilizadas nesse contexto (Express como framework,
PostgreSQL como base de dados, etc).


## 3. Ferramentas

* [ ] Node.js
* [ ] Express
* [ ] Sequelize
* [ ] PostgreSQL
* [ ] Postman
* [ ] Heroku




## 8 Endpoints

Conforme estabelecido pela [documentação](https://lab-api-bq.herokuapp.com/api-docs/)
entregue pelo nosso cliente, a API deve expor os seguintes endpoints:

### 8.1 `/users`

* [ ] `GET /users`
* [ ] `GET /users/:uid`
* [ ] `POST /users`
* [ ] `PUT /users/:uid`
* [ ] `DELETE /users/:uid`

### 8.2 `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

### 8.3 `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`

### 8.4 Hacker Edition

* [ ] Criptografar senha do usuário
* [ ] `POST /auth`
* [ ] Middleware de autenticação
* [ ] Middleware de erros
* [ ] Documentação da API
* [ ] Testes unitários
* [ ] Testes _e2e_
* [ ] Docker
