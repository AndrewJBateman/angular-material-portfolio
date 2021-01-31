# :zap: Portfolio Angular Material

* Angular & Angular Material used to create a fully-responsive portfolio website with a Firebase backend storing blog post entries, images as well as messages from users.

**\* Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

**Responsive:** Pages resize using Angular flex layout and grids of Angular Material mat-cards. Using breakpoint sizes from [Angular Flex Layout Documentation](https://github.com/angular/flex-layout/wiki/Responsive-API):

* xs 'screen and (max-width: 599px)'
* sm 'screen and (min-width: 600px) and (max-width: 959px)'
* md 'screen and (min-width: 960px) and (max-width: 1279px)'
* lg 'screen and (min-width: 1280px) and (max-width: 1919px)'
* xl 'screen and (min-width: 1920px) and (max-width: 5000px)'

**Build file:** TODO: reduce bundle sizes. webpack-bundle-analyzer used to analyse webpack performance. Replaced moment package with day.js as it uses less memory.

**Colors:** Add to styles scss to reduce repeated scss throughout app.

## :books: Sections info

**Navbars:** Top/side navbars with page routing and working links to my CV, Github and LinkedIn profiles. Login nav-link only shown when on blog page. Not needed on side menu.

**Home:** Includes a Http service to fetch my repo details from the github API. Angular Material cards used to display data, using data-binding from an array of 'areas' based on an Area model.

**Projects:** fxFlex layout with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 2 will show on a row (on a PC) before wrapping to the next line. Image sized to 16:9 ratio. Cards simplified to get 2 on a large screen. Footer includes 3 buttons: 1 routes to Project-detail page, 1 routes to github page and 1 opens the app in a browser.

**Project-Detail:** Navigates to project detail page from project page link. pages featured with images shown max 2 per line. Top card includes buttons to navigate back or to see code/app.

* PC app: Image size used: 892 x 502 to give 16:9 when 3 images in a row.
* mobile app: Image size used: 1066 x 600 (containes 3 x 9:16 images) to give 16:9 when 3 images in a row.

**Skills:** fxFlex layout with cards to display project data using data-binding from an array of skills based on a Skill model. Cards are sized so up to 4 will show on a row before wrapping to the next line.

**Contact:** Simple mat-form that user can fill in with name, email and comment. Input validation is included - Send button disabled if form incomplete/incorrect. Buttons to navigate to previous page and to clear the form. The data is sent to the app Firestore backend and a success message is returned once sending is complete. Large buttons allow user to return to Home page or send another message (which actually navigates 'back' to the same page presenting a clear form).

**Blog:** Posts are stored in the app Firebase DB and displayed on the Blog Posts page. No authorization required to Read posts. Google Firebase auth service added so an authenticated user can log in to Create, Update and Delete posts.
  Mat-cards now display Post title, subtitle, content, post category (dev, IT or Eng), time to read (calculated using a simple Angular pipe) and how old the post is (another pipe using the npm module Day.js). The Post Detail page includes the post image, Blog Detail and the footer includes an image credit with web link to the authors page.
**OPTION:** It is not currently possible to Update the image in a post - consider adding this and using firestore photo sizing to get the right width to height ratio (16:9). Post create page - change size, button color? Add link to project detail page.
**OPTION:** add Tabs so all Dev, Eng & IT posts shown in their own tabs (currently creates gaps with div.ng-star-inserted class).

**Future Updates** Dark mode toggle

## :signal_strength: Technologies

* [Angular framework v11](https://angular.io/)
* [Angular Material v11](https://material.angular.io/)
* [Angular Material Icons](https://material.io/resources/icons/?style=baseline)
* [Angular service worker v11](https://angular.io/guide/service-worker-intro) added
* [Firebase v8](https://firebase.google.com) Cloud storage and authentication.
* [Reactive Extensions Library for Javascript rxjs v6](https://rxjs-dev.firebaseapp.com/)
* [Dayjs v1](https://github.com/iamkun/dayjs) to convert Github UTC Timestamp to '... ago'
* [Webpack Bundle Analyser v4](https://www.npmjs.com/pawebpack-bundle-analyzerckage/webpack-bundle-analyzer) to create an 'interactive treemap visualization of the contents of all your bundles.'
* [Easy-resize.com](https://www.easy-resize.com/en/) to resize pictures online

## :floppy_disk: Setup

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files
* Run `ng build --prod` to create build file with Ahead of Time (aot) compilation (enabled by default from Angular 9)
* Run `npm run build:stats` to run the webpack-bundle-analyzer & generate a stats.json file inside of the dist folder
* Run `npm run analyze` and navigate to `http://localhost:8888/` to see the analysis
* Run `npm run build:ssr` to create a build file with SSR
* Run `npm run serve:ssr` to see the SSR on localhost
* Run `firebase deploy` to deploy build file to firebase hosting. (`ng deploy` does not work due to [errors with SSR](https://stackoverflow.com/questions/61913016/angular-npm-run-servessr-fails))

## :computer: Code Examples

* service function to fetch blog posts, from `post.service.ts` using the `AngularFirestoreCollection` database service. Note the use of the spread operator to return the data

```typescript
getPosts() {
  return this.postsCollection
    .snapshotChanges()
    .pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }
      )
    );
}
```

## :cool: Features

* Services: All http calls are enclosed in their own service, in the services folder. There are 3 services:

**posts:** to get posts from the Firestore backend database, **github:** [Github API](https://developer.github.com/v4/query/) used with a httpClient GET request to display current state of my repository, **auth:** to authenticate users and limit write access to the Firestore backend database.

## :clipboard: Status & To-Do List

* Status: Working, Built for Production and Deployed to Firebase, linked to my domain. Browser only version deployed.
* Lighthouse PC score: Performance 83%, Accessibility: 100%, Best practises: 100% & SEO: 100%, PWA OK
* To-Do: Improve lighthouse performance score: remove unused css and redo small images.
* To-Do: Replace mat-icons in pages
*  Other todos - see Sections Info above. scss embed styles. Move images to firebase storage. Fix `ng test`.

## :clap: Inspiration

* [Website by Julian Rubiano](http://www.julienrubiano.fr/)
* [Website by Jaxon Wright](https://jaxonwright.com/)
* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
* [Article by Paul Halliday: Angular: Performance Analysis with webpack Bundle Analyzer](https://alligator.io/angular/angular-webpack-bundle-analyzer/)
* [Blog post images from Unsplash](https://unsplash.com/)
* [Simon Grimm of Devdactic's article: How to Host Your Ionic App as a Website on Firebase & Standard Web Servers](https://devdactic.com/host-ionic-website-firebase/)
* [Okta, Holger Schmitz: What Is Angular Ivy and Why Is It Awesome?](https://developer.okta.com/blog/2020/02/12/angular-ivy)
* [Ahmed Bouchefra, Setting Up Angular Server-Side Rendering (SSR)](https://blog.jscrambler.com/setting-up-angular-server-side-rendering-ssr/)
* [Angular 8/9 SEO – Set Dynamic Page Title and Meta Tags in Universal App](https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/)
* [Firebase Quickstart Guide](https://firebaseopensource.com/projects/angular/angularfire2/)
* [Andrei Voicu: Using ESLint and Prettier with VScode in an Angular Project](https://dev.to/dreiv/using-eslint-and-prettier-with-vscode-in-an-angular-project-42ib)
 * [Taonpm: compression](https://developer.aliyun.com/mirror/npm/package/compression)

## :camera: Screenshots

* Home page
  ![Example screenshot](./img/home-pc.png)

* Project page
  ![Example screenshot](./img/projects-pc.png)
  ![Example screenshot](./img/projects-detail.png)

* Skills page
  ![Example screenshot](./img/skills-pc.png)

* Contact page before & after sending - Mobile
  ![Example screenshot](./img/contact-mobile.png)
  ![Example screenshot](./img/contact-mobile-sent.png)

* Blog Posts List page
  ![Example screenshot](./img/blog-pc.png)
  ![Example screenshot](./img/blog-create-pc.png)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
