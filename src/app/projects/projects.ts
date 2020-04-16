import { Project } from './project.module';

export const PROJECTS: Project[] = [
  // app 1
  {
    title: 'This Website',
    summary: `Angular 9 was used to build this site and Angular Material Design components were used extensively. A Google Cloud Firestore NoSQL database stores the blog posts and data from submitted Contact forms. Anyone can Read the blog posts but there is a login link in the navbars so only a logged in user can Create, Update and Delete (CRUD) posts. Google Authorization is used to login. 

I wanted to minimise time spent on styling and layout so I could focus on technical content. However presenting clear and fully-responsive content is also very important so I have made great use of Angular Material mat-cards. The Angular Flex Layout API was used to create a responsive row of columns. This means content such as mat-cards regroup neatly as the screen width is reduced to mobile (xs) size; max-width: 599px.

Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github menu links and I have avoided adding bloat by importing the Bootstrap library. I have followed Don\'t Repeat Yourself (DRY) rules, so data for the Home, Skills and Projects pages was created in separate typescript files (based on a model class) with 1-way data-binding to a *ngFor mat-card loop in the template so html template files are kept short.`,
    icon: 'person',
    images: [
      {
        src: '../assets/images/home-pc.jpg',
        page: 'Home Page',
        content: 'Github repo data fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable. Wikipedia links open in separate pages. Mat-cards used to show a brief history of my travels in engineering, programming and IT',
        icon: 'home'
      },
      {
        src: '../assets/images/projects-page.jpg',
        page: 'Projects Page',
        content: 'Mat-cards display project data using data-binding from an array of projects based on a Project model. Cards sized so up to 4 will show on a row before wrapping to the next line. Footer includes buttons to: navigate to Project-detail page with more info, navigate to github page & open app in browser.',
        icon: 'assignment'
      },
      {
        src: '../assets/images/contact-page.jpg',
        page: 'Contacts Page',
        content: 'Uses a mat-card inside a form with inputs with 2-way data-binding for name, email and message. The send button is disabled until all 3 user inputs are validated. When the user clicks the send button the data is sent to the app Firestore database collection and the image changes to say Thanks.',
        icon: 'email'
      },
      {
        src: '../assets/images/blog-page.jpg',
        page: 'Blog Page',
        content: 'Mat-cards display posts using data-binding from an array of posts based on a Post model. A custom pipe, using the day.js javascript library, converts the Firestore database UTC Epoch time Timestamp string to say 2 days ago etc. Another custom pipe calculates reading time based on content length.',
        icon: 'create'
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-material-portfolio',
		url: 'https://angular-blog-14cef.web.app/home'
  },
  // app 2
	{
    title: 'News App',
    summary: `Ionic 5 with Angular 9 was used to create an app that displays articles fetched from a news API. Angular Material components, including mat-list, mat-card, mat-sidenav etc. were also used. Features include:
* Typescript interface used to define the expected structure of the json object returned from the news API.
* Separate providers (services) page with API http fetch functions.
* Custom pipes used to modify API news article titles, contents and derive '..time ago' from a Univsal Time Constant (UTC) date string.
* Dark mode switch on menu changes from light to dark mode.
* Offline Storage of favourite articles using Ionic Storage.
* Network status check in initialisation so latest news data is stored. Template data-binding always from stored data.
* Common Refresh Component: dragging down on a page will perform refresh function.
* Common Progess Bar Component ion-card shown while news loading on News, Categories and Favourites pages.
* Localisation using i18n so user can select between English (default), Spanish and French.`,
  icon: 'view_headline',
    images: [
      {
        src: '../assets/images/newsapp-news.jpg',
        page: 'News Page',
        content: `News articles listed using a mat-list. Clicking on a list item will redirect user to a news-detail page with social media share buttons. Footer has links to the original article and option to save as a Favourite. Ion-select is used to show a list of news sources as a drop-down action-sheet with cancel button.`,
        icon: 'view_headline'
      },
      {
        src: '../assets/images/newsapp-categories.jpg',
        page: 'Categories Page',
        content: `Ion-segment used to show categories in a scrollable horizontal menu: Sport, Busines, Health, Technology, Science, General, Entertainment. Shows time as '... ago'. Title has news source end text removed using a custom Angular pipe as I show this information in the top toolbar.`,
        icon: 'tune'
      },
      {
        src: '../assets/images/newsapp-favourites.jpg',
        page: 'Favourites Page',
        content: 'Saved articles are listed in reverse date-time order using an ion-list inside a mat-cards. Sliding from the right deletes the favourite from the stored array. Unsplash image is shown (with credit to author) if there are no favourites stored using the Angular *ngIf structural directive.',
        icon: 'favorite'
      },
      {
        src: '../assets/images/newsapp-about.jpg',
        page: 'About Page/Side-Menu',
        content: `Includes popover with links to Author Website, Github Repo and a Contact Page. Unsplash image with author credit also shown. Images above include Side navigation menu, where the user can navigate to another page (menu closes automatically) or change language/dark-mode settings.`,
        icon: 'info'
      }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-news-app',
		url: 'https://ionic-angular-news.web.app/'
  },
  // app 3
	{
    title: 'World Data App',
    summary: 'Ionic-Angular app that displays information about world countries and oceans using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world country information using JSON data fetched from an external API. There is a page devoted to the worlds oceans as well',
    icon: 'language',
    images: [
      {
        src: '../assets/images/countryData.jpg',
        page: 'Home Page',
        content: '',
        icon: 'home'
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'Categories Page',
        content: '',
        icon: 'tune'
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'Favourites Page',
        content: '',
        icon: 'favorite'
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'About Page',
        content: '',
        icon: 'info'
      }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-world-data',
		url: ''
  },
  // app 4
	{
    title: 'Github Info App',
    summary: 'Ionic-Angular app that allows the user to search for Github users then displays their profile/repository info. using JSON data fetched from the Github API. User can see the number of repositories, how many followers and a full description of each software project.',
    icon: 'laptop',
    images: [
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'Home Page',
        content: '',
        icon: 'home'
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'Categories Page',
        content: '',
        icon: 'tune'
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'Favourites Page',
        content: '',
        icon: 'favorite'
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'About Page',
        content: '',
        icon: 'info'
      }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-github',
		url: ''
  },
  // app 5
	/* {
    title: 'Cryptocurrency App',
    summary: 'Ionic app that displays information about cryptocurrency prices using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
    icon: 'attach_money',
    images: [
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'Home Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/cryptoInfo.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  }, */
  // app 6
	/* {
    title: 'Tensorflow App',
    summary: 'Ionic app that displays tensorflow info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
    icon: 'timeline',
    images: [
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'Home Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/tensorflow.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  }, */
  // app 7
	/* {
    title: 'World Bank Data App',
    summary: 'Ionic app that displays worldbankinfo. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
    icon: 'trending_up',
    images: [
      {
        src: '../assets/images/worldBank.jpg',
        page: 'Home Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/worldBank.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-angular-world-data',
		url: ''
  }, */
  // app 8
	/* {
    title: 'NASA Data App',
    summary: 'Ionic app that displays NASA info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
    icon: 'location_searching',
    images: [
      {
        src: '../assets/images/nasaData.jpg',
        page: 'Home Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      },
      {
        src: '../assets/images/nasaData.jpg',
        page: 'xx Page',
        content: '',
        icon: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-nasa-api',
		url: ''
	}, */
];
