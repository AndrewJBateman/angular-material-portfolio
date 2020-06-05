import { Project } from "./project.module";

export const PROJECTS: Project[] = [
  // app 1
  {
    title: "API Dashboard",
    summary: `Angular 9 and Bootstrap were used to build a dashboard of API data.

`,
    icon: "person",
    images: [
      {
        src: "../assets/images/apiDash-home.jpg",
        page: "Home Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-nasa.jpg",
        page: "Nasa Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-crypto.jpg",
        page: "Crypto Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-map.jpg",
        page: "Map Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-news.jpg",
        page: "News Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-charts.jpg",
        page: "Charts Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-books.jpg",
        page: "Books Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-bestsellers.jpg",
        page: "Bestsellers Page",
        content: "fff",
      },
      {
        src: "../assets/images/apiDash-github.jpg",
        page: "github Page",
        content: "fff",
      },
    ],
    github: "https://github.com/AndrewJBateman/pean-stack-api-display",
    url: "https://angular-rest-apis.firebaseapp.com/",
  },
  // app 2
  {
    title: "This Website",
    summary: `Angular 9 was used to build this site and Angular Material Design components were used extensively. A Google Cloud Firestore NoSQL database stores the blog posts and data from submitted Contact forms. Anyone can Read the blog posts but there is a login link in the navbars so only a logged in user can Create, Update and Delete (CRUD) posts. Google Authorization is used to login.

I wanted to minimise time spent on styling and layout so I could focus on technical content. However presenting clear and fully-responsive content is also very important so I have made great use of Angular Material mat-cards. The Angular Flex Layout API was used to create a responsive row of columns. This means content such as mat-cards regroup neatly as the screen width is reduced to mobile (xs) size; max-width: 599px.

Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github menu links and I have avoided adding bloat by importing the Bootstrap library. I have followed Don\'t Repeat Yourself (DRY) rules, so data for the Home, Skills and Projects pages was created in separate typescript files (based on a model class) with 1-way data-binding to a *ngFor mat-card loop in the template so html template files are kept short.`,
    icon: "person",
    images: [
      {
        src: "../assets/images/home-pc.jpg",
        page: "Home Page",
        content:
          "Github repo data fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable. Wikipedia links open in separate pages. Mat-cards used to show a brief history of my travels in engineering, programming and IT",
      },
      {
        src: "../assets/images/projects-page.jpg",
        page: "Projects Page",
        content:
          "Mat-cards display project data using data-binding from an array of projects based on a Project model. Cards sized so up to 2 will show on a row before wrapping to the next line. Footer includes buttons to: navigate to Project-detail page with more info, navigate to github page & open app in browser.",
      },
      {
        src: "../assets/images/contact-page.jpg",
        page: "Contacts Page",
        content:
          "Uses a mat-card inside a form with inputs with 2-way data-binding for name, email and message. The send button is disabled until all 3 user inputs are validated. When the user clicks the send button the data is sent to the app Firestore database collection and the image changes to say Thanks.",
      },
      {
        src: "../assets/images/blog-page.jpg",
        page: "Blog Page",
        content:
          "Mat-cards display posts using data-binding from an array of posts based on a Post model. A custom pipe, using the day.js javascript library, converts the Firestore database UTC Epoch time Timestamp string to say 2 days ago etc. Another custom pipe calculates reading time based on content length.",
      },
    ],
    github: "https://github.com/AndrewJBateman/angular-material-portfolio",
    url: "https://angular-blog-14cef.web.app/home",
  },
  // app 3
  {
    title: "News App",
    summary: `Ionic 5 with Angular 9 was used to create an app that displays articles fetched from a news API. Angular Material components, including mat-list, mat-card, mat-sidenav etc. were also used. Features include:
* Typescript interface used to define the expected structure of the json object returned from the news API.
* Separate providers (services) page with API http fetch functions.
* Custom pipes used to modify API news article titles, contents and derive '..time ago' from a Univsal Time Constant (UTC) date string.
* Dark mode switch on menu changes from light to dark mode.
* Offline Storage of favourite articles using Ionic Storage.
* Common Refresh Component: dragging down on a page will perform refresh function.
* Common Progess Bar Component ion-card shown while news loading on News, Categories and Favourites pages.
* Localisation using i18n so user can select between English (default), Spanish and French.`,
    icon: "view_headline",
    images: [
      {
        src: "../assets/images/newsapp-news.jpg",
        page: "News Page",
        content: `News articles listed using a mat-list. Clicking on a list item will redirect user to a news-detail page with social media share buttons. Footer has links to the original article and option to save as a Favourite. Ion-select is used to show a list of news sources as a drop-down action-sheet with cancel button.`,
      },
      {
        src: "../assets/images/newsapp-categories.jpg",
        page: "Categories Page",
        content: `Ion-segment used to show categories in a scrollable horizontal menu: Sport, Busines, Health, Technology, Science, General, Entertainment. Shows time as '... ago'. Title has news source end text removed using a custom Angular pipe as I show this information in the top toolbar.`,
      },
      {
        src: "../assets/images/newsapp-favourites.jpg",
        page: "Favourites Page",
        content:
          "Saved articles are listed in reverse date-time order using an ion-list inside mat-cards. Sliding from the right deletes the favourite from the stored array. An Unsplash image is shown, with credit to the author if there are no favourites stored using the Angular *ngIf structural directive.",
      },
      {
        src: "../assets/images/newsapp-about.jpg",
        page: "About Page/Side-Menu",
        content: `Includes popover with links to Author Website, Github Repo and a Contact Page. Unsplash image with author credit also shown. Images above include Side navigation menu, where the user can navigate to another page (menu closes automatically) or change language/dark-mode settings.`,
      },
    ],
    github: "https://github.com/AndrewJBateman/ionic-angular-news-app",
    url: "https://ionic-angular-news.web.app/",
  },
  // app 4
  {
    title: "World Data App",
    summary: `Ionic-Angular app that displays information about world countries and oceans using JSON data fetched from an external API. Includes a user search field that will find all search results as the user types their search text. Page popovers are used to provide the user with links to external websites or activate functions such as delete item from favourites. Features include:
    * Typescript interface used to define the expected structure of the json object returned from the news API.
    * Separate providers (services) page with API http fetch functions.
    * Side menu switch to activate dark mode switch.
    * Localisation using i18n so user can select between English (default), Spanish or French language from side menu.
    * Integrated Google Maps API to show interactive country map.
    * Ion-grid with fixed column size used so content is responsive.
    `,
    icon: "language",
    images: [
      {
        src: "../assets/images/worldapp-countries.jpg",
        page: "Countries Page",
        content: `Displays a mat-card list of countries, displaying country flag, title, capital and region, for 'all' and 5 region sub-categories. Clicking on a country list item will show the country detail as well as a fab icon link to Google Maps. Country searchbar to search by country name.`,
      },
      {
        src: "../assets/images/worldapp-mapmenu.jpg",
        page: "Map & Menu Pages",
        content:
          "Google maps API used to show zoomable map that is centered on the country selected. Side Menu with links to pages for countries, oceans, favorites and about pages. Language can be changed from default English to Spanish or French. Dark theme toggle + image.",
      },
      {
        src: "../assets/images/worldapp-oceans.jpg",
        page: "Oceans Page",
        content: `Displays a mat-card for each ocean using data from a local json file and an *ngFor loop. Header toolbar includes popover with links to Wikipedia articles on each ocean that opens in a separate browser. It was decided not to add 'favourites functionality' as there are only 5 oceans and they are easy to find.`,
      },
      {
        src: "../assets/images/worldapp-about.jpg",
        page: "About Page",
        content: `Displays an Unsplash image with an author credit and short information about the app with links to the country information and Google Maps APIs used. Header includes a popover with working links that open externally to author Website, Github Repo & a Contact Form on the author's website.`,
      },
    ],
    github: "https://github.com/AndrewJBateman/ionic-angular-world-data",
    url: "https://ionic-world-info.firebaseapp.com",
  },
  // app 5
  {
    title: "Github Info App",
    summary:
      "Ionic-Angular app that allows the user to search for Github users then displays their profile/repository info. using JSON data fetched from the Github API. User can see the number of repositories, how many followers and a full description of each software project.",
    icon: "laptop",
    images: [
      {
        src: "../assets/images/elecInfo.jpg",
        page: "Home Page",
        content: "",
      },
      {
        src: "../assets/images/elecInfo.jpg",
        page: "Categories Page",
        content: "",
      },
      {
        src: "../assets/images/elecInfo.jpg",
        page: "Favourites Page",
        content: "",
      },
      {
        src: "../assets/images/elecInfo.jpg",
        page: "About Page",
        content: "",
      },
    ],
    github: "https://github.com/AndrewJBateman/ionic-angular-github",
    url: "",
  },
  // app 6
  /* {
    title: 'Cryptocurrency App',
    summary: 'Ionic app that displays information about cryptocurrency prices using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
    icon: 'attach_money',
    images: [
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  }, */
  // app 7
  /* {
    title: 'Tensorflow App',
    summary: 'Ionic app that displays tensorflow info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
    icon: 'timeline',
    images: [
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  }, */
  // app 8
  /* {
    title: 'World Bank Data App',
    summary: 'Ionic app that displays worldbankinfo. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
    icon: 'trending_up',
    images: [
      {
        src: '../assets/images/worldBank.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-world-data',
		url: ''
  }, */
  // app 9
  /* {
    title: 'NASA Data App',
    summary: 'Ionic app that displays NASA info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
    icon: 'location_searching',
    images: [
      {
        src: '../assets/images/nasaData.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-nasa-api',
		url: ''
	}, */
];
