import { Project } from "./project.model";

export const ProjectsArray: Project[] = [
  {
    projectArea: "Javascript",
    projects: [
      // app 1
      {
        title: "This Website",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/material.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
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
        svgPath2: "../assets/svgs/material.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/bitcoin.svg",
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
        title: "Next Apollo Crypto",
        svgPath1: "../assets/svgs/next.svg",
        svgPath2: "../assets/svgs/apollo.svg",
        svgPath3: "../assets/svgs/materialui.svg",
        svgPath4: "../assets/svgs/bitcoin.svg",
        summary:
          "A Next.js React cryptocurrency api app using Apollo GraphQL client and Material-UI components.",
        github: "https://github.com/AndrewJBateman/next-apollo-crypto",
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
        summary:
          "Angular app using Tailwind styles to display SNCF data from the Navitia API",
        github: "https://github.com/AndrewJBateman/angular-tailwind-sncf",
      },
      // app 9
      {
        title: "Angular ARCGis Maps",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/tailwind.svg",
        svgPath4: "../assets/svgs/arcgis.svg",
        summary:
          "Angular multi-page app using RxJS operators and ArcGIS esri-mapping solutions from Esri to display a map. Tailwind CSS used for reduced styles build bundle. ",
        github: "https://github.com/AndrewJBateman/angular-arcgis-multimaps",
      },
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
          "Vue frontend used to Create Read Update & Delete (CRUD) cable installation data with a Node-Express backend & MongoDB database.",
        github: "https://github.com/AndrewJBateman/mevn-stack-data",
      },
      // app 2
      {
        title: "MEVN Stack Notes",
        svgPath1: "../assets/svgs/vue.svg",
        svgPath2: "../assets/svgs/bootstrap.svg",
        svgPath3: "../assets/svgs/mongodb.svg",
        svgPath4: "../assets/svgs/nodejs.svg",
        svgPath5: "../assets/svgs/expressjs.svg",
        summary:
          "Displays simple text notes in a grid of Bootstrap cards. MongoDB, Express, Vue & Node.js (MEVN) stack used to perform Create, Read, Update and Delete (CRUD) operations. Vue is much smaller sized, simpler and easier to get start using than Angular.",
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
        title: "Angular GraphQL API",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/rxjs.svg",
        svgPath3: "../assets/svgs/graphql.svg",
        svgPath4: "../assets/svgs/apollo.svg",
        svgPath5: "../assets/svgs/nodejs.svg",
        summary:
          "Frontend: Angular with GraphQL & Apollo Client to view backend Engineering Parts data. Backend: Node.js + GraphQL + Apollo Server and GraphQL schema to execute queries on data",
        github: "https://github.com/AndrewJBateman/angular-graphql-api",
      },
      // app 6
      {
        title: "Next Prisma PostgreSQL",
        svgPath1: "../assets/svgs/next.svg",
        svgPath2: "../assets/svgs/react.svg",
        svgPath3: "../assets/svgs/nodejs.svg",
        svgPath4: "../assets/svgs/postgresql.svg",
        svgPath5: "../assets/svgs/materialui.svg",
        summary:
          "PostgreSQL database with Prisma & Next.js (React) to display project data",
        github: "https://github.com/AndrewJBateman/next-prisma-postgresql",
      },
      // app 7
      {
        title: "Angular Python Data",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/material.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/python.svg",
        svgPath5: "../assets/svgs/pie_chart.svg",
        summary:
          "Data is created using Python and stored in a Firebase database. Then it is displayedin an Angular frontend chart",
        github: "https://github.com/AndrewJBateman/angular-python-data",
      },
      // app 8
      {
        title: "Angular Material Firebase",
        svgPath1: "../assets/svgs/angular.svg",
        svgPath2: "../assets/svgs/material.svg",
        svgPath3: "../assets/svgs/rxjs.svg",
        svgPath4: "../assets/svgs/firebase.svg",
        summary:
          "Angular app with Angular material components used to display data stored in a firebase database",
        github: "https://github.com/AndrewJBateman/angular-material-firebase",
      },
    ],
  },
  {
    projectArea: "Node",
    projects: [
      {
        title: "Node ORM PostgreSQL",
        svgPath1: "../assets/svgs/nodejs.svg",
        svgPath2: "../assets/svgs/expressjs.svg",
        svgPath3: "../assets/svgs/postgresql.svg",
        svgPath4: "../assets/svgs/typescript.svg",
        summary:
          "Node.js used with TypeORM (an ORM - Object Relational Mapping) and Typescript to create a data Entity model and perform CRUD operations on the data in a PostgreSQL database",
        github: "https://github.com/AndrewJBateman/node-orm-postgres",
      },
      {
        title: "Node CRON PostgreSQL",
        svgPath1: "../assets/svgs/nodejs.svg",
        svgPath2: "../assets/svgs/expressjs.svg",
        svgPath3: "../assets/svgs/postgresql.svg",
        svgPath4: "../assets/svgs/cron.svg",
        svgPath5: "../assets/svgs/rss.svg",
        summary:
          "Node.js + Express used with the node-cron module to fetch RSS feed data in XML format and interract with a Supabase (PostgreSQL) database",
        github: "https://github.com/AndrewJBateman/node-cron-postgresql",
      },
      {
        title: "Node Koa Data",
        svgPath1: "../assets/svgs/nodejs.svg",
        svgPath2: "../assets/svgs/koajs.svg",
        svgPath3: "../assets/svgs/bootstrap.svg",
        svgPath4: "../assets/svgs/ejs.svg",
        summary:
          "Node.js used with Koa instead of Express middleware, with embedded javascript (EJS) & Bootstrap to display oil well data",
        github: "https://github.com/AndrewJBateman/node-koa-data",
      },
      {
        title: "Node Sequelize PostgreSQL",
        svgPath1: "../assets/svgs/nodejs.svg",
        svgPath2: "../assets/svgs/expressjs.svg",
        svgPath3: "../assets/svgs/postgresql.svg",
        svgPath4: "../assets/svgs/sequelize.svg",
        summary:
          "Node.js + Express used with Sequelize Object-Relational Mapping (ORM) to perform Create, Read, Update & Delete (CRUD) operations on linked data tables in a PostgreSQL database",
        github: "https://github.com/AndrewJBateman/node-sequelize-postgresql",
      },
    ],
  },
  // {
  //   projectArea: "Python",
  //   projects: [
  //     {
  //       title: "Python Title 1",
  //       svgPath1: "../assets/svgs/python.svg",
  //       summary:
  //         "Python1 project summary python1 project summary python1 project summary python1 project summary python1 project summary",
  //       github: "https://github.com/AndrewJBateman/python-bigquery-data",
  //     },
  //     {
  //       title: "Python Title 2",
  //       svgPath1: "../assets/svgs/python.svg",
  //       summary: "Python2 project summary",
  //       github: "https://github.com/AndrewJBateman/python-bigquery-data",
  //     },
  //     {
  //       title: "Python Title 3",
  //       svgPath1: "../assets/svgs/python.svg",
  //       summary: "Python3 project summary",
  //       github: "https://github.com/AndrewJBateman/python-bigquery-data",
  //     },
  //     {
  //       title: "Python Title 4",
  //       svgPath1: "../assets/svgs/python.svg",
  //       summary: "Python4 project summary",
  //       github: "https://github.com/AndrewJBateman/python-bigquery-data",
  //     },
  //   ],
  // },
  //   {
  //   projectArea: "Docker/Kubernetes",
  //   projects: [
  //     {
  //       title: "",
  //       svgPath1: "",
  //       summary: "",
  //       github: "",
  //     },
  //     {
  //       title: "",
  //       svgPath1: "",
  //       summary: "",
  //       github: "",
  //     },
  //     {
  //       title: "",
  //       svgPath1: "",
  //       summary: "",
  //       github: "",
  //     },
  //     {
  //       title: "",
  //       svgPath1: "",
  //       summary: "",
  //       github: "",
  //     },
  //   ],
  // },
  // {
  //   projectArea: "Java",
  //   projects: [
  //     {
  //       title: "Java Title 1",
  //       svgPath1: "../assets/svgs/angular.svg",
  //       summary:
  //         "Java1 project summary java1 project summary java1 project summary java1 project summary",
  //       github: "https://github.com/AndrewJBateman/java-concurrency-threads",
  //     },
  //     {
  //       title: "Java Title 2",
  //       svgPath1: "../assets/svgs/angular.svg",
  //       summary: "Java2 project summary",
  //       github: "https://github.com/AndrewJBateman/java-concurrency-threads",
  //     },
  //     {
  //       title: "Java Title 3",
  //       svgPath1: "../assets/svgs/angular.svg",
  //       summary: "Java3 project summary",
  //       github: "https://github.com/AndrewJBateman/java-concurrency-threads",
  //     },
  //     {
  //       title: "Java Title 4",
  //       svgPath1: "../assets/svgs/angular.svg",
  //       summary: "Java4 project summary",
  //       github: "https://github.com/AndrewJBateman/java-concurrency-threads",
  //     },
  //   ],
  // },
  // {
  //   projectArea: "IoT",
  //   projects: [

  //   ]
  // }
];
