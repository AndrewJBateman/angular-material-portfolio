import { Project } from "./project.module";

export const PROJECTS: Project[] = [
  // app 1
  {
    title: "PEAN Stack",
    svgPath1: "../assets/svgs/postgresql.svg",
    svgPath2: "../assets/svgs/expressjs.svg",
    svgPath3: "../assets/svgs/angular.svg",
    svgPath4: "../assets/svgs/nodejs.svg",
    svgPath5: "../assets/svgs/pie_chart.svg",
    summary: 'A dashboard of 8 components that display data from an SQL database & external APIs. The objective was to display data from a PostgreSQL backend database using Google Charts & to demonstrate Angular/reactive programming best practices in accessing REST API data, including separating http calls into separate services, using observables with API interface models to subscribe to the data via pipe(take(1)) operators and correct error handling. All pages are fully responsive. A Bootstrap responsive nav bar is used that changes to a burger menu with collapsible top menu on medium and smaller-sized screens. The component page name is displayed in the nav bar when the component is active. HTML pages have meta tags in the header to describe the page content using metadata. This is to optimise searches by search engines (SEO) and is part of the Google Lighthouse automated testing tool.',
    github: "https://github.com/AndrewJBateman/pean-stack-api-display",
    url: "https://angular-rest-apis.firebaseapp.com/",
  },
  // app 2
  {
    title: "This Website",
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/material.svg",
    svgPath3: "../assets/svgs/firebase.svg",
    summary: 'Angular Material components are used to display my technical information. A Google Cloud Firestore NoSQL database stores the blog posts and data from submitted Contact forms. Anyone can Read the blog posts. Angularfire-lite was used as a Firebase API wrapper as it is easy to use and lightweight, so reducing Vendor bundle size and improving the Chrome Lighthouse score.',
    github: "https://github.com/AndrewJBateman/angular-material-portfolio",
    url: "https://angular-blog-14cef.web.app/home",
  },
  // app 3
  {
    title: "News App",
    svgPath1: "../assets/svgs/ionic.svg",
    svgPath2: "../assets/svgs/angular.svg",
    svgPath3: "../assets/svgs/news.svg",
    summary: 'Articles are fetched from a news API. Uses typescript interface used to define the expected structure of the json object returned from the news API.Service providers used for the API http fetch functions. Custom pipes used to modify API news article titles, contents and derive ..time ago from a Univsal Time Constant (UTC) date string. Dark mode, Offline Storage of favourite articles & settings using Ionic Storage. Common Refresh & Progress Bar Components. Localisation using i18n so user can select between English (default), Spanish and French.',
    github: "https://github.com/AndrewJBateman/ionic-angular-news-app",
    url: "https://github.com/AndrewJBateman/ionic-angular-news-app",
  },
  // app 4
  {
    title: "World Data App",
    svgPath1: "../assets/svgs/ionic.svg",
    svgPath2: "../assets/svgs/angular.svg",
    svgPath3: "../assets/svgs/capacitor.svg",
    summary: 'Ionic-Angular app that displays information about world countries and oceans using JSON data fetched from an external API. Includes a user search field that will find all search results as the user types their search text. Page popovers are used to provide the user with links to external websites or activate functions such as delete item from favourites. Integrated Google Maps API to show interactive country map. Ion-grid with fixed column size used so content is responsive.',
    github: "https://github.com/AndrewJBateman/ionic-angular-world-data",
    url: "https://ionic-world-info.firebaseapp.com",
  },
  // app 5
  {
    title: "MEVN Stack",
    svgPath1: "../assets/svgs/mongodb.svg",
    svgPath2: "../assets/svgs/expressjs.svg",
    svgPath3: "../assets/svgs/vue.svg",
    svgPath4: "../assets/svgs/nodejs.svg",
    svgPath5: "../assets/svgs/heroku.svg",
    summary: 'This app is hosted on Heroku and displays simple text notes in a grid of Bootstrap cards. It uses the MongoDB, Express, Vue & Node.js (MEVN) stack to perform Create, Read, Update and Delete (CRUD) operations. Vue is much smaller sized, simpler and easier to get start using than Angular. For such a small app I did not use Vuex state management. Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model. Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use SVG icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Note model so notes are shown in separate categories, e.g. work, hobby or holiday ideas etc.',
    github: "https://github.com/AndrewJBateman/mevn-stack-notes",
    url: "https://mevn-stack-notes.herokuapp.com/",
  },
  // app 6
  {
    title: "Covid API Data",
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/material.svg",
    svgPath3: "../assets/svgs/covid.svg",
    svgPath4: "../assets/svgs/pie_chart.svg",
    summary: 'Displays data from a Covid-19 API. Angular/reactive programming best practices were used to access REST API data. All pages are fully responsive. There is a top menu for desktop/tablet screens and a burger icon-activated side menu for phone screens. The RxJS reactive programming library is used to handle datastreams and propagation of change using observables. Browser localStorage is used to store API data to prevent multiple GET requests for the same data. This app does not have significant performance needs so the synchronous nature of localStorage is ignored. Accessing of offline data via a Service worker/Progressive Web App (PWA) compliance was not added. HTML pages have meta tags in the header to describe the page content using metadata. This is to optimise searches by search engines (SEO) and is part of the Google Lighthouse automated testing tool.',
    github: "https://github.com/AndrewJBateman/angular-data-charts",
    url: "https://angular-data-charts.web.app",
  },
  // app 7
  //   {
  //     title: "MEEN Stack Articles",
  // svgPath1: "../assets/svgs/angular.svg",
  //     summary:
  //       `This app displays articles in a grid of Bootstrap cards. It uses the MongoDB, Express, Embedded Javascript Templating (EJS) & Node.js (MEEN) stack to perform Create, Read, Update and Delete (CRUD) operations. EJS is a templating language that uses javascript to produce the HTML template markup. I wanted to see if using EJS resulted in quicker rendering.

  // Backend: Express routes and controllers were created in separate folders to make the code more readable. A Mongoose schema was used for the Note model.

  // Frontend: I used the vue-moment Moment.js filter dependency to extract a more readable time format from the database UTC timestamp using a pipe. I chose to use svg icons stored in the assets folder, instead of importing font-awesome or other dependencies that would slow the app rendering speed. Future update could include adding a category field to the Article model so articles are shown in separate categories, e.g. 'Engineering', 'IT' etc.`,
  //     github: "https://github.com/AndrewJBateman/meen-stack-articles",
  //     url: "",
  //   },
  // app 8
  /* {
    title: 'Angular Tailwind Unsplash',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Angular app to get random images from the Unsplash API',
		github: 'https://github.com/AndrewJBateman/angular-unsplash-api',
		url: ''
  }, */
  // app 9
  {
    title: 'Angular Tailwind Ratp',
    svgPath1: "../assets/svgs/angular.svg",
    svgPath2: "../assets/svgs/tailwind.svg",
    svgPath3: "../assets/svgs/ratp.svg",
    summary: 'Displays data on commerce local to a RATP (French transport system) station, based on a user-entered postcode. Data fetched from the RATP API using Reactive Extensions Library (rxjs) methods',
    github: 'https://github.com/AndrewJBateman/angular-tailwind-ratp',
		url: ''
  },
  // app 10
  /* {
    title: 'Angular Esri ArcGIS',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Displays map data from the ArcGIS API, using the esri-loader and an Angular map creation service',
		github: 'https://github.com/AndrewJBateman/angular-esri-arcgis',
		url: ''
  }, */
  // app 11
  /* {
    title: 'Ionic Angular Nouvelles',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Ionic-Angular PWA to fetch French news from an API',
		github: 'https://github.com/AndrewJBateman/ionic-angular-nouvelles',
		url: ''
  }, */
  // app 12
  /* {
    title: 'Angular API Gouvfr',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Angular app to search for address data from the French Government official API',
		github: 'https://github.com/AndrewJBateman/angular-api-gouvfr',
		url: ''
  }, */
  // app 13
  /* {
    title: 'Python Django IcelandAPI',
    svgPath1: "../assets/svgs/angular.svg",
    summary: 'Displays volcano data from an Iceland API',
		github: '',
		url: ''
  }, */
  // app 14
  /* {
    title: 'Python Django SomethingData',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
		github: '',
		url: ''
  }, */
  // app 15
  /* {
    title: 'GCP App Engine something',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
		github: '',
		url: ''
  }, */
  // app 16
  /* {
    title: 'GCP Covid database something',
    svgPath1: "../assets/svgs/angular.svg",
    summary: '',
		github: '',
		url: ''
  }, */
];
