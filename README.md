# RAVN Challenge by Guido Tpia

This is the solution proposed by Guido Tapia for the RAVN challenge.
The challenge consisted in the development of a web or mobile application for connection to a graphql database.
This proposal was carried out using the following technologies: 

- reactJS 
- Apollo-Client.

## Getting Started

#### 1. Installing REACT
If this es your first time working with React, first you have to install node.js, you can download from the website https://nodejs.org/es/

If you already have it installed, the next step is update npm, you can do it with the command
`npm install -g npm@latest`

and to make sure we don't have any problems in the future, we clear the cache
`npm cache clean --force`

and finally we install create-react-App
`install -g create-react-app`
#### 2. Project Setup

For a correct setup of the project, you must first create a new React project on your pc. You can doit selecting the directory where you want to create your project and using the command:
`create-react-app [project_directory_name]`

and being in your project directory you must add apollo-client
`npm @apollo/client`
and graphql dependencies
`npm i graphql`

after this, you only need to download this repository and replace the duplicated files and folders.

#### 3. Running project

Finally for run the project you can do it locally with:
`npm start`

## Working Application

1. The application shows a correct performance according to the requirements expressed in the functionality statement.


![](RAVN-working.gif)


2. If we lose the conection an alert message will warn us that the data cannot be accessed.


![](RAVN-fail-2.gif)


3. Even though the design did not specify it, it was assumed that if the data of each character could not be displayed, a warning message should also be displayed.


![](RAVN-fail-1.gif)


## About development and additional criteria

####  File structure and distribution

`RAVN-Challenge-V2
├── node_modules (not included in repository)
├── public (icons,logos and others)
└── src
    └── api-apollo
    │   ├── AllPeopleQuery.js
    │   ├── PersonQuery.js
    ├── assets
    │   ├── images
    │   └── styles
    |        ├── App.css
    |        ├── components-cells.css
    |        ├── components-headers.css
    |        ├── components-indicators.css
    |        ├── components-lists.css
    |        ├── global-styles.css
    │        └── index.css
    ├── components
    │   ├── cells
    │   │   ├── DataCell.js
    │   │   ├── LoadingCell.js
    │   │   ├── NoticeCell.js
    │   │   └── PersonCell.js       
    │   ├── headers
    │   │   ├── PageHeader.js
    │   │   └── SectionHeader.js
    │   ├── indicators
    │   │   └── LoadingIndicators.js
    │   └── lists
    │       ├── DataList.js
    │       └── PeopleList.js
    ├── App.jss
    ├── App.test.js
    ├── index.js
    ├── reportWebVitals.js
	  └── PeopleList.js`
