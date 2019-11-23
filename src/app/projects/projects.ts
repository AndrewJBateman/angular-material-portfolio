import { Project } from './project.module';

export const PROJECTS: Project[] = [
  {
		title: 'Portfolio Website',
		img: {
			src: '../assets/images/techNews.jpg',
			alt: 'portfolio website'
		},
		content: `Angular 8 + Angular Material fully-responsive frontend with top/side navbars. A Google Cloud Firebase backend database stores the blog posts and data from submitted Contact forms. Anyone can view the blog posts but there is a login link in the navbars so only an authorized user can Create, Update and Delete posts. Firebase Authorization is used to login.

    Github repository data is fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable.
    
    I wanted to minimise time spent on styling and layout as I am an Engineer by trade and for me technical content is king. However a simple clear presentation is important as well as having a fully responsiveness layout. Hence I have made a lot of use of Angular Material cards to present information, together with the Angular Flex Layout API. Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github and I have avoided adding bloat by importing the Bootstrap library.
    
    The Contact page uses an Angular Material Card inside a Form that is added to the app Firestore database collection when submitted.
    
    I have followed Don\'t Repeat Yourself (DRY) rules, so data for the home, skills and projects pages was created in separate typescript files (based on a model class) with data-binding to a *ngFor mat-card loop in the template so html template files are kept short.
    
    `,
		github: 'https://github.com/AndrewJBateman/angular-material-portfolio',
		url: ''
	},
	{
		title: 'World News',
		img: {
			src: '../assets/images/techNews.jpg',
			alt: 'world news app'
		},
		content: `Ionic-Angular app that displays articles from a news API. App includes pages for news detail with links to the original article, social media sharing and offline storage of favourite articles. Includes a user search field Ionic-Angular app that displays world new. Dark mode inverts colours padding padding padding padding`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'Country Data',
		img: {
			src: '../assets/images/countryData.jpg',
			alt: 'country data app'
		},
		content: `Ionic-Angular app that displays information about world countries using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'Electrical Info',
		img: {
			src: '../assets/images/elecInfo.jpg',
			alt: 'electrical info app'
		},
		content: `Ionic app that displays electrical information using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using. JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using.`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'Cryptocurrencies',
		img: {
			src: '../assets/images/cryptoInfo.jpg',
			alt: 'cryptocurrency prices app'
		},
		content: `Ionic app that displays information about cryptocurrency prices using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'Tensorflow App',
		img: {
			src: '../assets/images/tensorflow.jpg',
			alt: 'tensorflow data'
		},
		content: `Ionic app that displays tensorflow info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'World Bank Data',
		img: {
			src: '../assets/images/worldBank.jpg',
			alt: 'world bank data'
		},
		content: `Ionic app that displays worldbankinfo. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'NASA Data',
		img: {
			src: '../assets/images/nasaData.jpg',
			alt: 'nasa data'
		},
		content: `Ionic app that displays NASA info. Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Includes a user search field Includes a user search field Includes a user search field Includes a user search field`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	},
	{
		title: 'Spare',
		img: {
			src: '../assets/images/techNews.jpg',
			alt: 'youtube data'
		},
		content: `Ionic app that stores Youtube videos in a very Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field Ionic-Angular app that displays world news using JSON data fetched from an external API. Includes a user search field colourful format for people with special-needs Includes a user search field Includes a user search field Includes a user search field`,
		github: 'https://github.com/AndrewJBateman/angular-api-countries',
		url: ''
	}

];
