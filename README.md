[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Daltonic/quoteLab/">
    <img src="https://vuejs.org/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Quotes Lab</h3>

  <p align="center">
    An awesome web-app that converts an HTML element into an image such as a quote.
    <br />
    <a href="https://github.com/Daltonic/quoteLab"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://quotes-lab.web.app/">View Demo</a>
    ·
    <a href="https://github.com/Daltonic/quoteLab/issues">Report Bug</a>
    ·
    <a href="https://github.com/Daltonic/quoteLab/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
![Quotes Lab Screenshot](https://dev-to-uploads.s3.amazonaws.com/i/2vqcaiv25gdshie7ewp9.png)

Quotes Lab is a web application for converting HTML mockups to images. Quotes Lab leverages on [Pixabay's API](https://pixabay.com) and the [dom-to-image-more](https://www.npmjs.com/package/dom-to-image-more) npm package to produce a high-quality image in base64. All these are layered together inside the VueJs 3 JavaScript framework.


### Built With

The following tools were used in the building of Quotes Lab.
* [VueJs 3](https://getbootstrap.com)
* [Vuex](https://getbootstrap.com)
* [dom-to-image-more](https://www.npmjs.com/package/dom-to-image-more)
* [Pixabay](https://pixabay.com)



<!-- GETTING STARTED -->
## Getting Started

To get this project running on your system observe and implement the following procedures.

### Prerequisites

Get the latest VueJs CLI installed on your machine by entering this command on your terminal.
* npm
  ```sh
  npm install -g @vue/cli
  ```

### Installation

1. Get a free API Key at [Pixabay's Doc](https://pixabay.com/api/docs/)
2. Clone the repo
   ```sh
   git clone https://github.com/Daltonic/quoteLab.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```



<!-- USAGE EXAMPLES -->
## Usage

When you visit the app domain at [Quotes Lab](http://quotes-lab.web.app/), enter the keyword of the image you want to convert to a quote.

![Quotes Lab Hero Screen Shot](https://res.cloudinary.com/practicaldev/image/fetch/s--wBbWwJ23--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cg5liewawededwdkn25h.png)

After entering your keyword cards of images will be rendered on the page on which you should select any to proceed to the next step. You can always click on the Load more button if you are not satisfied with the image result.

![Quotes Lab Images Screenshot](https://res.cloudinary.com/practicaldev/image/fetch/s--6-8YFbxI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/sjz0sv7e1lmbokw794v8.png)

After selecting an image you proceed to enter your quote and your name within the form below.

![Quotes Lab Editor Screenshot](https://res.cloudinary.com/practicaldev/image/fetch/s--lYbNYrsX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/80xsxk59gc0h1fvtkq56.png)

Once you are done editing your quote, you click on the capture button to convert it to an image and the output will be seen below.

![Quotes Lab Output Screenshot](https://res.cloudinary.com/practicaldev/image/fetch/s--iUW9hCmo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cfudpna97fh74cty9aqf.png)

Within this component are two buttons, one gets the image downloaded to your device while the other removes the image from the view.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Daltonic/quoteLab/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Gospel Darlington - [Facebook](https://www.facebook.com/darlington.gospel01) - darlingtongospel@gmail.com

Project Link: [https://github.com/Daltonic/quoteLab](https://github.com/Daltonic/quoteLab)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [VueJs](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Pixabay](https://pixabay.com/)
* [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart/)
* [Dom-To-Image-More](https://www.npmjs.com/package/dom-to-image-more/)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Daltonic/quoteLab/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Daltonic/quoteLab/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/Daltonic/quoteLab/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Daltonic/quoteLab/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Daltonic/quoteLab/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/darlington-gospel-aa626b125/
[product-screenshot]: images/screenshot.png
