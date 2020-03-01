# React

![reactapp](https://hookey.cc/assets/img/eb4bf849ad09c85747300fa7775f6c5b.png)


> JSX
  
  <https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project>

> use an integrated toolchain that includes JSX 
      
  <https://reactjs.org/docs/create-a-new-react-app.html>

> use React without JSX, in which case you can remove Babel:
      
  <https://reactjs.org/docs/react-without-jsx.html>
  
  # Install 
  
  > npm
  
      $npm install --save react react-dom 
      
      + react@16.13.0
      + react-dom@16.13.0
      
      $npm install babel
      + babel@6.23.0
  
  
  # Setup in code
  
  > JS
  
      <script type="text/javascript" src="/path/to/react.js"></script> 
      <script type="text/javascript" src="/path/to/react-dom.js"></script> 
      <script type="text/javascript">
      
  > JSX with Babel
  
      <script type="text/javascript" src="/path/to/react.js"></script>
      <script type="text/javascript" src="/path/to/react-dom.js"></script> 
      <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script> 
      <script type="text/babel">
      
# Stateless is better than Stateful (causes side-effect)
>
stateless func is always will return the same values given to varivales.
However, stateful function will not return the same values given even no param. This type of function's behaviour is also called as a side-effect. 

> Stateful makes maintanance difficult
So, it is advised to use stateless components more often, since they are side-effect free and will create the same behaviour always. That is what you want to be after in your apps because fluctuating state is the worst case scenario for a maintainable program.

> Sateless Components with its props provided by React
The most basic type of react component is one without state!
React components that are pure functions of their props and do not require any internal state management. These are said to be Stateless Functional Components because they are a function only of props, without having any state to keep track of.

# Create React App

    $npm install -g create-react-app
    + create-react-app@3.4.0
    
> after cd to working dir, then

    $create-react-app my-app
    
> cd to my-app. then start it

    $npm start
    Installing react, react-dom, and react-scripts with cra-template...
    + react-dom@16.13.0
    + react@16.13.0
    + react-scripts@3.4.0
    + cra-template@1.0.2
    
# CLI

  cd qsreactapp

*npm start

    Starts the development server.
    Local:            http://localhost:3000
    On Your Network:  http://192.168.100.24:3000
    
    
![start dev server](https://i.imgur.com/OXMkiOX.png)


*npm run build

    Bundles the app into static files for production.

*npm test

    Starts the test runner.

*npm run eject

    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
    
# App Files

    qsreactapp/.gitignore
 
              /README.md
 
              /package-lock.json
              /package.json

              /public/favicon.ico
                     /index.html
                     /logo192.png
                     /logo512.png
                     /manifest.json
                     /robots.txt
                     
              /src/App.css
                  /App.js
                  /App.test.js
                  /index.css
                  /index.js
                  /logo.svg
                  /serviceWorker.js
                  /setupTests.js
 
# App Structure

    qsreactapp ------| package.json (dependency mgmt)
           
               ------| src | ------ App.js (app wrapper)
               
                           | ------ index.js (code)
                           
                           | ------ index.css
                           
                           | ------ image.svg
                           
               ------| public | ------ manifest.json
               
                              | ------ index.html (render)
                              
                              | ------ favicon.ico

