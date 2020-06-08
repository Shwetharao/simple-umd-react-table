# simple-umd-react-table
Deploy React application to Non react application using UMD

##About 
This is simple React application which display sample table developed to deploy across non reacat applications using UMD file.
 
##Getting Started
Following are the instructions used to copy of the project up and running on local machine for development and testing purposes. Refer deployment for notes on how to deploy the project on a live system.

##Prerequisites
It requires "Node" software to run project. 

###List of NPM package dependencies, 

 1. "react": "^16.13.1",
 2. "react-dom": "^16.13.1"
 3. "@babel/core": "^7.10.2",
 4. "@babel/preset-env": "^7.10.2",
 5. "@babel/preset-react": "^7.10.1",
 6. "babel-loader": "^8.1.0",
 7. "css-loader": "^3.5.3",
 8. "file-loader": "^6.0.0",
 9. "html-webpack-plugin": "^4.3.0",
 10."style-loader": "^1.2.1",
 11."webpack": "^4.43.0",
 12."webpack-cli": "^3.3.11",
 13."webpack-dev-server": "^3.11.0"
 
##Usage : 
 
clone the git repository and run, 
 	npm install 
 	npm start 
	npm run build
Open the dist/index.html file for usage of the UMD library.

OR

npm install react react-dom

### Install dev dependencies
npm install -D @babel/core @babel/preset-env "@babel/preset-react babel-loader css-loader file-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server

clone webpack.config.babel.js, babelrc and src folder.

###Run project with 
 npm start 
###Generate Build with 
 npm run build

##Developed by using
react - The Javacript framework 
webpack and babel - Dependency for runnung and generating UMD file.
HTML 

##Authors
Shwetha Rao
