# Portfolio Angular Material

Angular 8 app using Angular Material to create a portfolio website.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* tba

## Sections info

* **Navbar:** Working top/side navbars with page routing.

* **Home:** Add Http service added to display my number of repos, linked to github API. Option: Add more detailed github later but will need api key.

* **About:** tba

* **Projects:** tba

* **Articles:** tba

* **Skills:** tba

* **Contact:** tba Single Boostrap card with links to email, github and linkedin.

* **CV Download:** Finish 1-page CV that links to CV button on right.

## Screenshots

![Example screenshot](./img/.png)

## Technologies

* [Angular CLI v8.0.1](https://github.com/angular/angular-cli)

* [Angular framework v8.2.5](https://angular.io/)

* [Angular Material v8.2.0](https://material.angular.io/)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Examples

```typescript
export class Project {
  title: string;
  img: { src: string, alt: string };
  content: string;
  tools: { prefix: string, icon: string } [];
  github: string;
  url: string;
}

```

## Features

* [Github API](https://developer.github.com/v4/query/) used with httpClient get request to display current state of my repository.

## Status & To-Do List

* Status: In development. Compiles. Basic menu.

* To-Do: see Sections Info above.

## Inspiration

* [website by Julian Rubiano](http://www.julienrubiano.fr/)

* [website by Jaxon Wright](https://jaxonwright.com/)

* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
