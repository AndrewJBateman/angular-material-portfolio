import { Area } from './area.module';

export const AREAS: Area[] = [
	{
		title: 'Full Stack Development',
		content: `I obtained the Free Code Camp (FCC) Full Stack Development Certificate after starting with html, css & javascript then completing course units & projects in 6 programming areas: Responsive Web Design, Javascript Algorithms & Data Structures, Front-End Libraries (including Bootstrap, jQuery, SaSS, React & Redux), D3 Data Visualisation, APIs/Microservices & Information Security/Quality Assurance.

It is estimated to take 1800hours and it took me a year (2017) working part-time. It gave me experience in a variety of web development tools. From there I wanted to specialise in one javascript framework. After studying React and Vue I decided to focus on Angular.`
	},
	{
		title: 'Angular',
		content: `A big consideration when choosing what language/framework/stack/etc. to spend time mastering is simply the number of jobs in Linkedin. I found Angular skills to be very much in demand and its support by Google and use by larger companies was a big attraction. I have therefore gained a lot of experience of Angular, including components, 1 and 2-way data-binding, pipes, directives, services, forms, Http requests, routing, authentication, modules, NgRx, observables, dependancy injection, service workers etc, as well as fixing breaking changes caused by 6-monthly Angular version updates. I am currently working with Angular 8. After a lot more tutorials (including a 37-hour Udemy course) and projects in Angular 6/7/8 - 40% of my repositories include Angular - I decided to deepen my knowledge of the MEAN Stack.`
	},
	{
		title: 'MEAN Stack',
		content: 'After exploring the MERN and MEVN stacks I decided to focus on MEAN. I had already used MongoDB with Mongoose and the Heroku mLab database service, Express middleware and Node.js for the backend part of the FCC Full-Stack Certificate. I also had knowledge of Angular as a front-end and communicating with the backend using the Angular HttpClient service. I completed a 12.5-hour MEAN-Stack Udemy course as well as other Youtube tutorials, learning the details of making full CRUD operations at the front-end to Create-Read-Update and Delete data in a backend database. User authorization and error-handling was also covered. I also completed a 36.5-hour Udemy course on Node.js, REST APIs, GraphQL APIs.'
	},
	{
		title: 'Databases',
		content: 'I have experience of Structured Query Language (SQL) relational databases, My experience of noSQL is mainly MongoDB, using Mongoose schemas and models. I have used the AWS MongoDB Atlas Cloud Service and the MongoDB Compass GUI for some projects. I have also used Cordova SQLite with Ionic apps. My database knowledge has come from Teamtreehouse, Youtube videos and the FCC and Udemy courses already mentioned.'
	},
	{
		title: 'Ionic',
		content: 'I wanted to build mobile apps and found the Ionic Framework ideal as it is integrated with Angular and builds native and prgressive web apps from the same code-base. I completed a 34-hour Ionic Udemy course, many Youtube tutorials and have worked on a number of apps using Ionic 4 & 5 - 15% of my repositories include Angular. I also have experience using Capacitor to create native-like user interfaces. See Projects page.'
	},
	{
		title: 'Programming Languages',
		content: 'Most of my programming experience so far has been in Javascript ES6 (ECMAScript6 / 2015), on the client and server sides. I started my programming journey with a range of courses with TeamTreehouse, including completing Full Stack Javascript, PHP, C#, Rails Development, Java Web Development, Android (up to advanced level) Tracks, Swift, Ruby, Wordpress, Rails, ASP.NET. Since Treehouse I focused on Javascript as it was the most popular language and was used on the front and backend. Due to its use in Angular I have also spent a lot of time using Typescript.'
	},
	{
		title: 'Machine-Learning and TensorFlow',
		content: 'Tensorflow came up in one of my job-searches as a skill in demand. I then found that a TensorFlow.js library was available so I would not have to learn Python to use it. I completed a 17.5-hour Udemy course in Machine Learning with Javascript and have a few Github repos but this is work in progress and I am looking to incorporate TensorFlow into an Ionic mobile app.'
	},
	{
		title: 'Engineer',
		content: 'I have Master & Bachelor degrees in Electronic/Electrical Engineering (completed in 1993) and over 20 years experience as an Engineer working on Power, Process Control, Instrumentation and PLC/SCADA systems. I am familiar with computer hardware, synchronous/asynchronous data communications, industrial ethernet, profibus, RS485/RS422/RS232C networks, technical software, PLC digital/analogue I/O & ladder logic etc. I also had experience of concepts relevent to programming, such as boolean logic, arrays and memory caching etc so getting heavily into programming was less difficult for me.'
	},
	{
		title: 'About This Website',
		content: `The Angular 8 javascript framework was used to build this site. A Google Cloud Firebase backend database stores the blog posts and data from submitted Contact forms. There is a login link in the navbars and an authorized user can Create, Read, Update and Delete (CRUD) posts. Firebase Authorization is used to login.

Github repository data is fetched from the Github API via an Angular HTTPClient get request (resting on the browser XMLHttp Request Interface) service using an RxJS Observable.

I wanted to minimise time spent on styling and layout as I am an Engineer by trade and for me technical content is king. However a simple clear presentation is important as well as having a fully responsiveness layout. Hence I have made a lot of use of Angular Material cards to present information, together with the Angular Flex Layout API. Icons are limited to the Angular Material Icon Library - e.g. there are no icons for linkedin or github and I have avoided adding bloat by importing the Bootstrap library.

The Contact page uses an Angular Material Card inside a Form that is added to the app Firestore database collection when submitted.

I have followed Don\'t Repeat Yourself (DRY) rules, so data for the home, skills and projects pages was created in separate typescript files (based on a model class) with data-binding to a *ngFor mat-card loop in the template so html template files are kept short.

Navigation is via top and side navbars. I added icons to the side nav bar just because I liked them but I know they are not necessary.`
	}
];
