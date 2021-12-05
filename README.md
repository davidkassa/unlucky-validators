<p align="center">
  <a href="https://unluckyvalidators.io">
    <img src="src/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Unlucky Validators</h3>

  <p align="center">
    A simple application for sharing stats for Ethereum validators.
    <br />
    <br />
    Can be found hosted at <a href="https://unluckvalidators.io"><strong>https://unluckyvalidators.io</strong></a>
    <br />
    <br />
    <a href="https://github.com/davidkassa/unlucky-validators/issues">Report Bug</a>
    ·
    <a href="https://github.com/davidkassa/unlucky-validators/issues">Request Feature</a>
  </p>
</p>

---

# Development

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]](LICENSE)

| Service       | [Main](https://unluckyvalidators.io)             | [Develop](https://dev.unluckyvalidators.io)                   |
| ------------- | -------------------------------------------- | ----------------------------------------------------- |
| CI Status     | [![Main][build-main-shield]][build-main-url] | [![Develop][build-develop-shield]][build-develop-url] |
| Build History | [![Main][build-main-history]]                | [![Develop][build-develop-history]]                   |

## Getting started

This should be all you need to do to get started. This will point to an existing Firebase database that is read-only.

```javascript
git clone git@github.com:davidkassa/unlucky-validators.git && cd unlucky-validators
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### Firebase

To get Firebase Functions or your own Firestore Database running you can follow their [Get Started](https://firebase.google.com/docs/functions/get-started) documentation.

- Run `npm install -g firebase-tools`
- Create a [Firebase project](https://console.firebase.google.com)
- [Create an Admin key](https://firebase.google.com/docs/functions/local-emulator#set_up_admin_credentials_optional) and name it service-key-dev.json.local
- Update [.firebaserc](.firebaserc)
- Call `npm run test:firebase` or `cd functions && npm run shell`
- If all works, you can deploy from the [/functions](/functions) directory with `npm run deploy`

You may need to authenticate with the Firebase CLI as well. I was already authenticated.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/davidkassa/unlucky-validators/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request on the `develop` branch

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/davidkassa/unlucky-validators?style=flat-square
[contributors-url]: https://github.com/davidkassa/unlucky-validators/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/davidkassa/unlucky-validators?style=flat-square
[forks-url]: https://github.com/davidkassa/unlucky-validators/network/members
[stars-shield]: https://img.shields.io/github/stars/davidkassa/unlucky-validators?style=flat-square
[stars-url]: https://github.com/davidkassa/unlucky-validators/stargazers
[issues-shield]: https://img.shields.io/github/issues/davidkassa/unlucky-validators?style=flat-square
[issues-url]: https://github.com/davidkassa/unlucky-validators/issues
[license-shield]: https://img.shields.io/github/license/davidkassa/unlucky-validators?style=flat-square
[build-main-shield]: https://img.shields.io/github/workflow/status/davidkassa/unlucky-validators/Deploy%20Production?style=flat-square
[build-main-url]: https://github.com/davidkassa/unlucky-validators/actions?query=branch%3Amain
[build-main-history]: https://buildstats.info/github/chart/davidkassa/unlucky-validators?includeBuildsFromPullRequest=false&branch=main
[build-develop-shield]: https://img.shields.io/github/workflow/status/davidkassa/unlucky-validators/Deploy%20Staging?style=flat-square
[build-develop-url]: https://github.com/davidkassa/unlucky-validators/actions?query=branch%3Adevelop
[build-develop-history]: https://buildstats.info/github/chart/davidkassa/unlucky-validators?includeBuildsFromPullRequest=false&branch=develop
