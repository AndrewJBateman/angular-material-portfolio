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

* Responsive - pages resize OK using Angular flex layout and grids of Angular Material mat-cards.

## Sections info

* **Navbar:** Working top/side navbars with page routing.

* **Home:** 1. Complete real content. Http service added to display my number of repos, linked to github API. Option: Add more detailed github later but will need api key. Angular Material cards used to display data on areas studied/worked, using data-binding from an array of areas based on a Area model.

* **Blog:** 2. Complete first 4 of real content: Angular, . Firebase auth service added so I can login to edit posts. Blogs will be stored in Firebase DB and displayed on the Blog Posts page.

* **Projects:** 3. Complete real content or add coming soon link. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 8 on a large screen.

* **Skills:** 4. Complete real content. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 8 on a large screen.

* **Contact:** Working OK. Material card with link to email. Replace with a proper contact form.

* **CV Download:** 5. Complete content for 1-page CV.

## Screenshots

![Example screenshot](./img/.png)

## Technologies

* [Angular CLI v8.0.1](https://github.com/angular/angular-cli)

* [Angular framework v8.2.5](https://angular.io/)

* [Angular Material v8.2.0](https://material.angular.io/)

* [Firebase Cloud storage and Authentication](https://firebase.google.com)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Examples

## Features

* [Github API](https://developer.github.com/v4/query/) used with httpClient get request to display current state of my repository.

## Status & To-Do List

* Status: In development. Compiles.

* To-Do: see Sections Info above.

## Inspiration

* [website by Julian Rubiano](http://www.julienrubiano.fr/)

* [website by Jaxon Wright](https://jaxonwright.com/)

* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

* [javascript: Photo by Markus Spiske on Unsplash,  database: Photo by Markus Spiske on Unsplash, angular: Photo by Markus Spiske on Unsplash, arrays: Photo by Taylor Vick on Unsplash](https://unsplash.com/)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
