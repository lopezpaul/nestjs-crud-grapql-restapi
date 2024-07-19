<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">GraphQL server for a task CRUD. This server is consumed by another repository for its graphical interface, with the aim of using different technologies in the frontend such as: ReactJS, NextJS, VueJS, NuxtJS, etc.
</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## GraphQL recommendations

For all the requests the base url is:
http://127.0.0.1:3000/graphql or http://localhost:3000/graphql

For the IDE Client, I used Altair GraphQL Client but you can use whatever you prefer

## Show list of Tasks

```
query {
  tasks {
    id
    description
    isCompleted
  }
}
```

Expected result:

```
{
  "data": {
    "tasks": [
      {
        "id": 1,
        "description": "test",
        "isCompleted": false
      }
    ]
  }
}
```

## Create Task

```
mutation CreateTask($createTaskInput: CreateTaskInput!){
  createTask(createTaskInput: $createTaskInput) {
      description
      isCompleted
    }
}
```

Variables

```
{
  "createTaskInput": {
  	"description":"test",
    "isCompleted": false
	}
}
```

Expected result:

```
{
  "data": {
    "createTask": {
      "description": "test",
      "isCompleted": false
    }
  }
}
```

## Update Task

```
mutation UpdateTask($updateTaskInput: UpdateTaskInput!){
  updateTask(updateTaskInput: $updateTaskInput) {
      description
      isCompleted
    }
}
```

Variables

```
{
   "updateTaskInput": {
    "id":1,
  	"description":"test updated",
    "isCompleted": true
	}
}
```

Expected result:

```
{
  "data": {
    "updateTask": {
      "description": "test updated",
      "isCompleted": true
    }
  }
}
```

## Remove Task

```
mutation {
  removeTask(id: 1){
    id
  }
}
```

Expected result:

```
{
  "data": {
    "removeTask": {
      "id": 1
    }
  }
}
```

## Find Task by ID

```
query {
  task(id:2) {
    id
    description
    isCompleted
  }
}
```

Expected result

```
{
  "data": {
    "task": {
      "id": 1,
      "description": "test updated",
      "isCompleted": true
    }
  }
}
```

## License

Nest and this project are [MIT licensed](LICENSE).
