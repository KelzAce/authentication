<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

<!-- Project Shields -->
<div align="center">
 
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![Twitter][twitter-shield]][twitter-url]

</div>

<div>
  <p align="center">
    <a href="https://github.com/KelzAce/authentication#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/KelzAce/authentication/issues">Report Bug</a>
    ·
    <a href="https://github.com/KelzAce/authentication/issues">Request Feature</a>
  </p>
</div>

<!-- About the API -->

## Authentication

&mdash; a wonderful Blogging API built by <a href="https://github.com/KelzAce/">Ikechi</a>.

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Nest.js][nestjs]
![MongoDB][mongodb]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

## Requirements

<details>

<summary> <strong>Requirements for Authentication</strong> </summary>

- [x] Users should have a username, password

- [x] A user should be able to sign up and sign in into the app

- [x] Used JWT as authentication strategy and expire the token after 30minutes

- [x] User Password must be at least 8 characters, with at least one symbol. alphanumeric characters(Uppercase and lowercase) and at least a number

- [x] There must be a proper error feedback for each case from the Backend


<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

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

#### Update .env with [example.env](https://github.com/KelzAce/authentication/blob/main/example.env)

#### Run a development server

```sh
npm run start:dev
```

or

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

### Models

#### User

| field     | data_type     | constraints      |
| --------- | ------------- | ---------------- |
| username  | string        | required, unique |
| password  | string        | required         |

<p align="right"><a href="#readme-top">back to top</a></p>

---

## Usage

### Base URL

- https://authentication-4q9j.onrender.com

### Creating a user

- Route: /api/v1/users/register
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
  "status": "success",
  "data": {
    "username": "mightyjoe",
    "_id": "6367c296ba7522bd8561e4f6"
     "token": {token},
  }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Logging in

- Route: /api/v1/users/login
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


<!-- License -->

## License

Distributed under the MIT License. See <a href="https://github.com/KelzAce/authentication/blob/main/LICENSE.md">LICENSE</a> for more information.

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Contact -->

## Contact

- Twitter - [@Ikechi](https://twitter.com/kelgod)
- email - ikechigreat@gmail.com

Project Link: [Blogolicious](https://github.com/KelzAce/authentication)

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Acknowledgements -->

## Acknowledgements

This project was made possible by:

- [Full Stack open 2022](https://fullstackopen.com/en/)
- [Dr Austin Wopara's Ze Blog](https://github.com/Ze-Austin/ze-blog)
- [Othneil Drew's README Template](https://github.com/othneildrew/Best-README-Template)
- [Ileriayo's Markdown Badges](https://github.com/Ileriayo/markdown-badges)
- [markdown-emojis](https://github.com/markdown-templates/markdown-emojis)

<p align="right"><a href="#readme-top">back to top</a></p>
<!-- Markdown Links & Images -->

[contributors-shield]: https://img.shields.io/github/contributors/tobisupreme/blogolicious.svg?style=for-the-badge
[contributors-url]: https://github.com/tobisupreme/blogolicious/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tobisupreme/blogolicious.svg?style=for-the-badge
[forks-url]: https://github.com/tobisupreme/blogolicious/network/members
[stars-shield]: https://img.shields.io/github/stars/tobisupreme/blogolicious.svg?style=for-the-badge
[stars-url]: https://github.com/tobisupreme/blogolicious/stargazers
[issues-shield]: https://img.shields.io/github/issues/tobisupreme/blogolicious.svg?style=for-the-badge
[issues-url]: https://github.com/tobisupreme/blogolicious/issues
[license-shield]: https://img.shields.io/github/license/tobisupreme/blogolicious.svg?style=for-the-badge
[license-url]: https://github.com/tobisupreme/blogolicious/blob/main/LICENSE.md
[twitter-shield]: https://img.shields.io/badge/-@tobisupreme-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/tobisupreme
[twitter-url]: https://twitter.com/tobisupreme
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1C
[nestjs]: https://img.shields.io/badge/nestjs-%2523323330.svg?style=for-the-badge&logo=javascript&logoColor=%2523F7DF1C
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white