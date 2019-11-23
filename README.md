# Portfolio Angular Material

Angular 8 app using Angular Material to create a fully-responsive portfolio website with a Firebase backend storing blog post entries, images as well as Contact messages from users.

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

* **Responsive:** Pages resize using Angular flex layout and grids of Angular Material mat-cards. Using breakpoint sizes:
desktop 1200px (anything above 1024px)
iPad: 768
bigger screens: 1024px, 
iPhone: 320, 480px lanscape

* **Build file:** TODO: reduce bundle sizes (2.5MB currently). webpack-bundle-analyzer used to analyse webpack performance. Replaced moment package with day.js as it uses less memory.

* **Colors:** Add to styles scss to reduce repeated scss throughout app.

## Sections info

* **Navbars:** Working. top/side navbars with page routing and working links to my Github and LinkedIn profiles.
TODO: all good for now. Add link to CV

* **Home:** Working. Top section has 2 fxFlex columns with photo and text, including a Http service to display my number of repos, linked to the github API. Also displays date when Github profile page was updated. Rest of page comprises Angular Material cards used to display data on areas studied/worked, using data-binding from an array of 'areas' based on an Area model.
TODO: add link at bottom to return to the top (good for mobile phones):

* **Projects:** Working. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row (on a PC) before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 8 on a large screen. Footer includes 3 buttons: 1 routes to Project-detail page with more info, 1 routes to github page and 1 open app in browser.
TODO: Complete real content, add routing for Project-detail page.

* **Skills:** Working. fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line.
TODO: Complete real content. 

* **Contact:** Working, code tidy. Simple mat-form that user can fill in with name, email and comment. Input validation is included - Send button disabled if form incomplete/incorrect. Buttons to navigate to previous page and to clear the form. The data is sent to the app Firestore backend and a success message is returned once sending is complete. Large buttons allow user to return to Home page or send another message (which actually navigates 'back' to the same page presenting a clear form).
TODO: Update this to send me an email with the message.

* **Blog:** Working. Posts are stored in the app Firebase DB and displayed on the Blog Posts page. No authorization required to Read posts. Google Firebase auth service added so an authenticated user can log in to Create, Update and Delete posts.
Mat-cards now display Post title, subtitle, content, post category (dev, IT or Eng), time to read (calculated using a simple Angular pipe) and how old the post is (another pipe using the npm module Day.js). The Posts list page shows the image with the image credit text in bottom left corner. The Post Detail page adds a web link to the image authors page in the card footer. 
TODO:  It is not currently possible to Update the image in a post - consider adding this and using firestore photo sizing to get the right width to height ratio (16:9). Post create page - change size, button color? Add link to project detail page.

Note: I keep a backup copy of each post in the post-backups folder, in case the Firestore database goes down.

* **Future Updates** Dark mode toggle, CV Download, blog list mode toggle (removes photos from list page), blog post notification - tells readers there is a new post.

## Technologies

* [Angular CLI v8.3.19](https://github.com/angular/angular-cli)

* [Angular framework v8.2.14](https://angular.io/)

* [Angular Material v8.2.3](https://material.angular.io/)

* [Firebase v6.6.1](https://firebase.google.com) Cloud storage and authentication.

* [Reactive Extensions Library for Javascript rxjs v6.5.3](https://rxjs-dev.firebaseapp.com/)

* [dayjs v1.8.17](https://github.com/iamkun/dayjs) to convert Github UTC Timestamp to '... ago'.

* [Webpack Bundle Analyser v3.6.0](https://www.npmjs.com/package/webpack-bundle-analyzer) to create an 'interactive treemap visualization of the contents of all your bundles.'.

## Setup

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Run `npm run build:stats` to run the webpack-bundle-analyzer & generate a stats.json file inside of the dist folder.

* Run `npm run analyze` and navigate to `http://localhost:8888/` to see the analysis.

## Code Examples

## Features

* [Github API](https://developer.github.com/v4/query/) used with a httpClient get request to display current state of my repository.

## Status & To-Do List

* Status: Working, Built for Production and Deployed to Firebase but content not finished.

* To-Do: see Sections Info above.

## Inspiration

* [website by Julian Rubiano](http://www.julienrubiano.fr/)

* [website by Jaxon Wright](https://jaxonwright.com/)

* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

* [article by Paul Halliday: Angular: Performance Analysis with webpack Bundle Analyzer](https://alligator.io/angular/angular-webpack-bundle-analyzer/)

* Blog posts images from [Unsplash](https://unsplash.com/)

## Screenshots

* Home page - PC and Mobile
![Example screenshot](./img/home-pc.png)
![Example screenshot](./img/home-mobile.png)

* Project page - PC and Mobile
![Example screenshot](./img/projects-pc.png)
![Example screenshot](./img/projects-mobile.png)

* Skills page - PC and Mobile
![Example screenshot](./img/skills-pc.png)
![Example screenshot](./img/skills-mobile.png)

* Contact page before & after sending - PC
![Example screenshot](./img/contact-pc.png)
![Example screenshot](./img/contact-pc-sent.png)

* Contact page before & after sending - Mobile
![Example screenshot](./img/contact-mobile.png)
![Example screenshot](./img/contact-mobile-sent.png)

* Blog Posts List page - PC and Mobile size
![Example screenshot](./img/blog-pc.png)
![Example screenshot](./img/blog-create-pc.png)
![Example screenshot](./img/blog-mobile.png)

* Webpack Bundle Analyzer 21 november 2019
![Example screenshot](./img/bundle_analyzer.png)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!