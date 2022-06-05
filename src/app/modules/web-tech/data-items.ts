import { DataItem } from "./data-item.model"
declare var require: any;

export const DataItems: DataItem[] = [
  {
    name: "Angular",
    version: require('@angular/core/package.json').version,
    link: 'https://www.npmjs.com/package/@angular/core',
    iconLink: "../../../assets/svgs/angular.svg",
  },
  {
    name: "Angular Material",
    version: require('@angular/material/package.json').version,
    link: 'https://www.npmjs.com/package/@angular/material',
    iconLink: "../../../assets/svgs/material.svg",
  },
  {
    name: "RxJS",
    version: require('rxjs/package.json').version,
    link: 'https://www.npmjs.com/package/rxjs',
    iconLink: "../../../assets/svgs/rxjs.svg",
  },
  {
    name: "TypeScript",
    version: require('typescript/package.json').version,
    link: 'https://www.npmjs.com/package/typescript',
    iconLink: "../../../assets/svgs/typescript.svg",
  },
  {
    name: "Firebase",
    version: require('firebase/package.json').version,
    link: 'https://www.npmjs.com/package/firebase',
    iconLink: "../../../assets/svgs/firebase.svg",
  },
  {
    name: "Progressive Web App",
    version: require('@angular/service-worker/package.json').version,
    link: 'https://www.npmjs.com/package/@angular/service-worker',
    iconLink: "../../../assets/svgs/pwa.svg",
  },
  {
    name: "Express.js",
    version: require('express/package.json').version,
    link: 'https://www.npmjs.com/package/express',
    iconLink: "../../../assets/svgs/expressjs.svg",
  },
  {
    name: "Node.js",
    version: "16.13.2",
    link: 'https://www.npmjs.com/package/node',
    iconLink: "../../../assets/svgs/nodejs.svg",
  },
];
