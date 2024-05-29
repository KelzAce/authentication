<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

<!-- Project Shields -->
<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![Twitter][twitter-shield]][twitter-url]
</div>

<div>
  <p align="center">
    <a href="https://github.com/KelzAce/authenticaation#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://blogolicious.cyclic.app/">Demo</a> -->
    ·
    <a href="https://github.com/KelzAce/authentication/issues">Report Bug</a>
    ·
    <a href="https://github.com/KelzAce/authentication/issues">Request Feature</a>
  </p>
</div>

<!-- About the API -->

## Forexxx

&mdash; a wonderful Authentication API built by <a href="https://www.github.com/KelzAce">Ikechi</a>.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Nest.js][nest]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Project Requirements -->

## Requirements

<details>

<summary> <strong>Requirements for the project</strong> </summary>

- [x] A GitHub repository.
- [x] A Postman collection for API testing and exploration.

<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Nest.js](https://nestjs.com/)

#### Clone this repo

```sh
git clone https://github.com/KelzAce/authentication.git
```

#### Install project dependencies

```sh
npm install
```

or

```sh
yarn install
```

#### Update .env with [example.env](https://github.com/KelzAce/authentication/blob/master/example.env)

#### Run a development server for each application


#### Api-gateway

```sh
npm run start:dev
```


#### Auth/User Application

```sh
npm run start:dev 
```

or


#### Auth/User Application
```sh
yarn run start:dev 
```


#### For testing, run

```sh
npm run test
```

or

```sh
yarn run test
```

#### Entities

#### User


| field       |  data_type         | constraints      |
| ----------- | ------------------ | ---------------- |
| id          | number             | required, unique |
| username    | string             | required         |
| password    | string             | required         |


<p align="right"><a href="#readme-top">back to top</a></p>

---

### Register a User

- Route: localhost:3000/api/v1/users/register
- Method: POST

:point_down: Body

```json
{
  "username": "john@gmail.com",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "status": "success",
  "data": {
    "username": "john@gmail.com",
    "password": "sdhfvbiwegdviqwueiqcbie",
    "_id": { " "}
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>



### Logging in

- Route: localhost:3000/api/v1/users/login
- Method: POST

:point_down: Body

```json
{
  "username": "mightyjoe",
  "password": "Password0!"
}
```

:point_down: Response

```json
{
  "token": {token},
  "username": "mightyjoe",
  "name": "John"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---


<p align="right"><a href="#readme-top">back to top</a></p>
<!-- Markdown Links & Images -->

[contributors-shield]: https://img.shields.io/github/contributors/KelzAce/foreeex.svg?style=for-the-badge
[contributors-url]: https://github.com/KelzAce/foreeex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KelzAce/foreeex.svg?style=for-the-badge
[forks-url]: https://github.com/KelzAce/foreeex/tree/master/network/members
[stars-shield]: https://img.shields.io/github/stars/KelzAce/foreeex.svg?style=for-the-badge
[stars-url]: https://github.com/KelzAce/foreeex/stargazers
[issues-shield]: https://img.shields.io/github/issues/KelzAce/foreeex.svg?style=for-the-badge
[issues-url]: https://github.com/KelzAce/foreeex/issues
[license-shield]: https://img.shields.io/github/license/KelzAce/foreeex.svg?style=for-the-badge
[license-url]: https://github.com/KelzAce/foreeex/blob/master/LICENSED.md
[twitter-shield]: https://img.shields.io/badge/-@Kelzgod-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/Kelzgod
[twitter-url]: https://twitter.com/Kelzgod
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1C
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Nest]: https://img.shields.io/badge/nest.js-%23404d59.svg?style=for-the-badge&logo=nest&logoColor=%2361DAFB
[Docker]: https://img.shields.io/badge/docker.io-%23404d59.svg?style=for-the-badge&logo=nest&logoColor=%2361DAFB
[Postgres]: https://img.shields.io/badge/POSTGRESQL-%234ea94b.svg?style=for-the-badge&logo=posgresdb&logoColor=white