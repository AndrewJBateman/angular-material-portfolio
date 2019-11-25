import { Project } from './project.module';

export const PROJECTS: Project[] = [
  // app 1
  {
    title: 'Portfolio Website',
    summary: `I wanted to minimise time spent on styling and layout as I am an Engineer by trade and for me technical content is king. However a simple clear presentation is important as well as having a fully responsiveness layout. Hence I have made a lot of use of Angular Material cards to present information, together with the Angular Flex Layout API. Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github menu links as I have avoided adding bloat by importing the Bootstrap library.
    
    I have followed Don\'t Repeat Yourself (DRY) rules, so data for the home, skills and projects pages was created in separate typescript files (based on a model class) with data-binding to a *ngFor mat-card loop in the template so html template files are kept short.
    `,
    images: [
      {
        src: '../assets/images/home-pc.jpg',
        page: 'Home Page',
        content: 'Github repository data is fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah'
      },
      {
        src: '../assets/images/techNews.jpg',
        page: 'Projects Page',
        content: ''
      },
      {
        src: '../assets/images/techNews.jpg',
        page: 'Skills Page',
        content: ''
      },
      {
        src: '../assets/images/techNews.jpg',
        page: 'Contacts Page',
        content: 'The Contact page uses an Angular Material Card inside a Form that is added to the app Firestore database collection when submitted.'
      },
      {
        src: '../assets/images/techNews.jpg',
        page: 'Blog Posts List Page',
        content: ''
      },
      {
        src: '../assets/images/techNews.jpg',
        page: 'Blog Posts Detail Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-material-portfolio',
		url: ''
  },
    // app 2
	{
    title: 'World News',
    summary: 'Ionic-Angular app that displays articles from a news API. App includes pages for news detail with links to the original article, social media sharing and offline storage of favourite articles. Includes a user search field Ionic-Angular app that displays world new. Dark mode inverts colours padding padding padding padding',
    images: [
      {
        src: '../assets/images/worldBank.jpg',
        page: 'Home Page',
        content: 'Github repository data is fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable.'
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
        content: 'The Contact page uses an Angular Material Card inside a Form that is added to the app Firestore database collection when submitted.'
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
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  },
    // app 3
	{
    title: 'Country Data',
    summary: 'Ionic-Angular app that displays information about world countries using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
    images: [
      {
        src: '../assets/images/countryData.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/countryData.jpg',
        page: 'xx Page',
        content: ''
      }
    ],
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
  },
    // app 4
	{
    title: 'Tech Info App',
    summary: 'Ionic app that displays electrical information using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using. JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using.',
    images: [
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'Home Page',
        content: ''
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'xx Page',
        content: ''
      },
      {
        src: '../assets/images/elecInfo.jpg',
        page: 'xx Page',
        content: ''
       },
       {
         src: '../assets/images/elecInfo.jpg',
         page: 'xx Page',
         content: ''
        }
    ],
		github: 'https://github.com/AndrewJBateman/ionic-api-techdata',
		url: ''
  },
    // app 5
	{
    title: 'Cryptocurrencies',
    summary: 'Ionic app that displays information about cryptocurrency prices using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
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
  },
    // app 6
	{
    title: 'Tensorflow App',
    summary: 'Ionic app that displays tensorflow info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API',
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
  },
    // app 7
	{
    title: 'World Bank Data',
    summary: 'Ionic app that displays worldbankinfo. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
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
  },
    // app 8
	{
    title: 'NASA Data',
    summary: 'Ionic app that displays NASA info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field Includes a user search field',
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
	},
];
