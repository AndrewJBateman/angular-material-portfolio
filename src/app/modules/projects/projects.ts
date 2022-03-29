import { Project } from "./project.model";

export const ProjectsArray: Project[] = [
  {
    projectArea: "Javascript",
    projects: [
      // app 1
      {
        title: "This Website",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/material.svg",
        svgPath4: "../assets/svgs/firebase.svg",
        summary:
          "Angular Material & RxJS Observables are used to display my data. A Google Cloud Firestore NoSQL database stores the blog posts & Contact Form data. Anyone can read the blog posts. Angularfire-lite was used as a Firebase API wrapper as it is simple and lightweight, reducing Vendor bundle size & improving the Chrome Lighthouse score.",
        github: "https://github.com/AndrewJBateman/angular-material-portfolio",
      },
      // app 2
      {
        title: "Covid API Data",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/material.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/covid.svg",
        svgPath5: "../assets/svgs/pie_chart.svg",
        summary:
          "Displays data from a Covid-19 API. Angular/reactive programming best practices were used to access REST API data. All pages are fully responsive. There is a top menu for desktop/tablet screens and a burger icon-activated side menu for phone screens. The RxJS reactive programming library is used to handle datastreams and propagation of change using observables. Browser localStorage is used to store API data to prevent multiple GET requests for the same data. This app does not have significant performance needs so the synchronous nature of localStorage is ignored. Accessing of offline data via a Service worker/Progressive Web App (PWA) compliance was not added. HTML pages have meta tags in the header to describe the page content using metadata. This is to optimise searches by search engines (SEO) and is part of the Google Lighthouse automated testing tool.",
        github: "https://github.com/AndrewJBateman/angular-data-charts",
      },
      // app 3
      {
        title: "Angular Tailwind Unsplash",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/tailwind.svg",
        svgPath4: "../assets/svgs/unsplash.svg",
        svgPath5: "../assets/svgs/github1.svg",
        summary:
          "App to get random images from the Unsplash API and display them on a responsive tailwind-styled card. Tailwind used due to a very small styles bundle size when compiled, resulting in a faster render time and improved lighthouse score",
        github: "https://github.com/AndrewJBateman/angular-tailwind-unsplash",
      },
      // app 4
      {
        title: "Angular Tailwind RATP",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/tailwind.svg",
        svgPath4: "../assets/svgs/ratp.svg",
        svgPath5: "../assets/svgs/github1.svg",
        svgPath6: "../assets/svgs/france.svg",
        summary:
          "Displays data on commerce local to a RATP (French transport system) station, based on a user-entered postcode. Data fetched from the RATP & Github APIs using Reactive Extensions Library (rxjs) methods",
        github: "https://github.com/AndrewJBateman/angular-tailwind-ratp",
      },
      // app 5
      {
        title: "Angular Material API",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        summary:
          "Angular Progressive Web App using Angular Material and Server Side Rendering (SSR) to display cryptocurrency information and achieve an excellent Lighthouse score.",
        github: "https://github.com/AndrewJBateman/angular-material-api",
      },
      // app 6
      {
        title: "Angular Bootstrap Info",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/bootstrap.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/news.svg",
        summary:
          "Ionic-Angular app to fetch news articles from a REST API using Typescript interfaces & HTTP service providers. Custom pipes used to modify API news article titles, contents and convert the Universal Time Constant (UTC) date string. ",
        github: "https://github.com/AndrewJBateman/angular-bootstrap-info",
      },
      // app 7
      {
        title: "Angular GraphQL API",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Angular frontend with GraphQL with node backend",
        github: "https://github.com/AndrewJBateman/angular-graphql-api",
      },
      // app 8
      {
        title: "Angular Tailwind SNCF",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/tailwind.svg",
        svgPath4: "../assets/svgs/ratp.svg",
        svgPath5: "../assets/svgs/github1.svg",
        svgPath6: "../assets/svgs/france.svg",
        summary: "Displays data SNCF",
        github: "https://github.com/AndrewJBateman/angular-tailwind-sncf",
      },
      // app 9

      // app 10
      {
        title: "News App",
        svgPath1: "../assets/svgs/ionic.svg",
        svgPath2: "../assets/svgs/angular.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/news.svg",
        summary:
          "Ionic-Angular app to fetch news articles from a REST API using Typescript interfaces & HTTP service providers. Custom pipes used to modify API news article titles, contents and convert the Universal Time Constant (UTC) date string. Dark mode, Offline Storage of favourite articles & settings using Ionic Storage. Common Refresh & Progress Bar Components. Localisation using i18n so user can select between English (default), Spanish and French.",
        github: "https://github.com/AndrewJBateman/ionic-angular-news-app",
      },
      // app 11
      {
        title: "World Data App",
        svgPath1: "../assets/svgs/ionic.svg",
        svgPath2: "../assets/svgs/angular.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/capacitor.svg",
        summary:
          "Ionic-Angular app that displays information about world countries and oceans using JSON data fetched from a REST API. Includes a user search of countries/capitals. Page popovers used to provide links to external websites or activate functions such as delete item from favourites. Integrated Google Maps API to show interactive country map. Ion-grid with fixed column size used so content is responsive.",
        github: "https://github.com/AndrewJBateman/ionic-angular-world-data",
      },
      // app 12
      {
        title: "Next Cryptocurrency Charts",
        svgPath1: "../assets/svgs/next.svg",
        svgPath2: "../assets/svgs/react.svg",
        svgPath3: "../assets/svgs/materialui.svg",
        svgPath4: "../assets/svgs/apollo.svg",
        svgPath5: "../assets/svgs/graphql.svg",
        svgPath6: "../assets/svgs/bitcoin.svg",
        summary:
          "Next.js app using React library components, Material-UI, GraphQL, Apollo & Server Side Renderng (SSR) to display cryptocurrency price data from the Nomics Cryptocurrency API",
        github: "https://github.com/AndrewJBateman/next-apollo-crypto",
      },
    ],
  },
  {
    projectArea: "Full-Stack",
    projects: [
      // app 1
      {
        title: "MEVN Stack Data",
        svgPath1: "../assets/svgs/vue.svg",
        svgPath2: "../assets/svgs/bootstrap.svg",
        svgPath3: "../assets/svgs/mongodb.svg",
        svgPath4: "../assets/svgs/nodejs.svg",
        svgPath5: "../assets/svgs/expressjs.svg",
        svgPath6: "../assets/svgs/heroku.svg",
        summary:
          "Displays simple text notes in a grid of Bootstrap cards. MongoDB, Express, Vue & Node.js (MEVN) stack used to perform Create, Read, Update and Delete (CRUD) operations. Vue is much smaller sized, simpler and easier to get start using than Angular. For such a small app I did not use Vuex state management. Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model. Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use SVG icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Note model so notes are shown in separate categories, e.g. work, hobby or holiday ideas etc.",
        github: "https://github.com/AndrewJBateman/mevn-stack-notes",
      },
      // app 2
      {
        title: "MEVN Stack Notes",
        svgPath1: "../assets/svgs/vue.svg",
        svgPath2: "../assets/svgs/bootstrap.svg",
        svgPath3: "../assets/svgs/mongodb.svg",
        svgPath4: "../assets/svgs/nodejs.svg",
        svgPath5: "../assets/svgs/expressjs.svg",
        svgPath6: "../assets/svgs/heroku.svg",
        summary:
          "Displays simple text notes in a grid of Bootstrap cards. MongoDB, Express, Vue & Node.js (MEVN) stack used to perform Create, Read, Update and Delete (CRUD) operations. Vue is much smaller sized, simpler and easier to get start using than Angular. For such a small app I did not use Vuex state management. Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model. Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use SVG icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Note model so notes are shown in separate categories, e.g. work, hobby or holiday ideas etc.",
        github: "https://github.com/AndrewJBateman/mevn-stack-notes",
      },
      // app 3
      {
        title: "PEAN Stack",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/bootstrap.svg",
        svgPath4: "../assets/svgs/pie_chart.svg",
        svgPath5: "../assets/svgs/postgresql.svg",
        svgPath6: "../assets/svgs/nodejs.svg",
        svgPath7: "../assets/svgs/expressjs.svg",
        summary:
          "Full-stack app to display data from a PostgreSQL database & REST APIs using an Angular frontend with Google Charts, Bootstrap CSS & RxJS reactive programming. Node with Express middleware backend used to pass data from database to frontend.",
        github: "https://github.com/AndrewJBateman/pean-stack-api-display",
      },
      // app 4
      {
        title: "MEEN Stack Articles",
        svgPath1: "../assets/svgs/ejs.svg",
        svgPath2: "../assets/svgs/bootstrap.svg",
        svgPath3: "../assets/svgs/mongodb.svg",
        svgPath4: "../assets/svgs/nodejs.svg",
        svgPath5: "../assets/svgs/expressjs.svg",
        svgPath6: "../assets/svgs/github1.svg",
        summary:
          "This app displays articles in a grid of Bootstrap cards. It uses the MongoDB, Express, Embedded Javascript Templating (EJS) & Node.js (MEEN) stack to perform Create, Read, Update and Delete (CRUD) operations. EJS is a templating language that uses javascript to produce the HTML template markup. I wanted to see if using EJS resulted in quicker rendering. Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Article model. Frontend: I used day.js to extract a more readable time format from the database UTC timestamp using a pipe.",
        github: "https://github.com/AndrewJBateman/meen-stack-articles",
      },
      // app 5
      {
        title: "Node Express Excel",
        svgPath4: "../assets/svgs/nodejs.svg",
        summary: "Node.js app to connect to google sheets doc",
        github: "https://github.com/AndrewJBateman/node-express-excel",
      },
      // app 6
      {
        title: "Next Prisma PostgreSQL",
        svgPath4: "../assets/svgs/nodejs.svg",
        summary:
          "PostgreSQL database with Prisma & Next.js (React) to display project data",
        github: "https://github.com/AndrewJBateman/next-prisma-postgresql",
      },
      // app 7
      {
        title: "Angular Python Charts",
        svgPath1: "../assets/svgs/angular.svg",
        summary:
          "Displays data from Firebase database in an Angular frontend chart using Python",
        github: "https://github.com/AndrewJBateman/angular-python-charts",
      },
      // app 8
      {
        title: "Angular Material Firebase",
        svgPath4: "../assets/svgs/angular.svg",
        summary:
          "Angular app with Angular material components to display data stored using firebase v9",
        github: "https://github.com/AndrewJBateman/angular-material-firebase",
      },
    ],
  },
  {
    projectArea: "Python",
    projects: [
      {
        title: "Python Title 1",
        svgPath1: "../assets/svgs/angular.svg",
        summary:
          "Python1 project summary python1 project summary python1 project summary python1 project summary python1 project summary",
        github: "https://github.com/AndrewJBateman/python-bigquery-data",
      },
      {
        title: "Python Title 2",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Python2 project summary",
        github: "https://github.com/AndrewJBateman/python-bigquery-data",
      },
      {
        title: "Python Title 3",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Python3 project summary",
        github: "https://github.com/AndrewJBateman/python-bigquery-data",
      },
      {
        title: "Python Title 4",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Python4 project summary",
        github: "https://github.com/AndrewJBateman/python-bigquery-data",
      },
    ],
  },
  {
    projectArea: "Java",
    projects: [
      {
        title: "Java Title 1",
        svgPath1: "../assets/svgs/angular.svg",
        summary:
          "Java1 project summary java1 project summary java1 project summary java1 project summary",
        github: "https://github.com/AndrewJBateman/java-concurrency-threads",
      },
      {
        title: "Java Title 2",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Java2 project summary",
        github: "https://github.com/AndrewJBateman/java-concurrency-threads",
      },
      {
        title: "Java Title 3",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Java3 project summary",
        github: "https://github.com/AndrewJBateman/java-concurrency-threads",
      },
      {
        title: "Java Title 4",
        svgPath1: "../assets/svgs/angular.svg",
        summary: "Java4 project summary",
        github: "https://github.com/AndrewJBateman/java-concurrency-threads",
      },
    ],
  },
  // {
  //   projectArea: "IoT",
  //   projects: [

  //   ]
  // }
];
