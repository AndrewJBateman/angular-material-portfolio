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

* **Navbar:** Working. top/side navbars with page routing and working links to my Github and LinkedIn profiles.

* **Home:** Working. Top section has 2 fxFlex columns with photo and text, including a Http service to display my number of repos, linked to the github API. Also displays date when Github profile page was updated. Rest of page comprises Angular Material cards used to display data on areas studied/worked, using data-binding from an array of 'areas' based on an Area model.

* **Projects:** Working. Complete real content or add coming soon link. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 8 on a large screen.

* **Skills:** Working. Complete real content. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 8 on a large screen.

* **Contact:** Working. Simple mat-form that user can fill in with name, email and comment. Some input validation is included, linked to the send button so an incomplete/incorrect form cannot be sent. The data is sent to the app Firestore backend and a success message is returned once sending is complete.

* **Blog:** Working. A non-authorized user can only Read the blog posts. Posts are stored in the app Firebase DB and displayed on the Blog Posts page. Google Firebase auth service added so an authenticated user can log in to Create, Update and Delete posts. Put photo credit in footer with action buttons - use grid, row and 2 columns with 8 - 4 widths? Make title start on left and have date on the right. Fix Wordcount pipe  - not findable by template. Edit date of post when it is edited.

* **Future Updates** Dark mode toggle, CV Download, blog list mode toggle (removes photos from list page), blog post notification - tells readers there is a new post.

## Technologies

* [Angular CLI v8.0.1](https://github.com/angular/angular-cli)

* [Angular framework v8.2.5](https://angular.io/)

* [Angular Material v8.2.0](https://material.angular.io/)

* [Firebase v6.6.1](https://firebase.google.com) Cloud storage and authentication.

* [moment v2.24.0](https://momentjs.com) to convert Github UTC string to '... ago'.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Examples

## Features

* [Github API](https://developer.github.com/v4/query/) used with httpClient get request to display current state of my repository.

## Status & To-Do List

* Status: Working but still in development. Compiles.

* To-Do: see Sections Info above.

## Inspiration

* [website by Julian Rubiano](http://www.julienrubiano.fr/)

* [website by Jaxon Wright](https://jaxonwright.com/)

* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

* [**Blog posts image credits:** javascript: Photo by Markus Spiske on Unsplash, database: Photo by Markus Spiske on Unsplash, angular: Photo by Markus Spiske on Unsplash, arrays: Photo by Taylor Vick on Unsplash, mobile frameworks: Photo by Christian Widell on Unsplash, frameworks: Photo by Caspar Camille Rubin on Unsplash, newsapp: Photo by Breakslow on Unsplash, microservices: Photo by QuickOrder on Unsplash](https://unsplash.com/)

## Screenshots

![Example screenshot](./img/home-pc.png)
![Example screenshot](./img/home-mobile.png)
![Example screenshot](./img/contact-pc.png)
![Example screenshot](./img/contact-pc-sent.png)
![Example screenshot](./img/contact-mobile.png)
![Example screenshot](./img/contact-mobile-sent.png)
![Example screenshot](./img/blog-pc.png)
![Example screenshot](./img/blog-create-pc.png)
![Example screenshot](./img/blog-mobile.png)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
